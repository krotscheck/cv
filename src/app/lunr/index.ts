/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { Configuration, FieldConfiguration } from './configuration';
import { DocRef, DocumentStore } from './document-store';
import { DocInfo, InvertedIndex } from './inverted-index';
import { IndexPipeline, IndexPipelineFunction } from './index-pipeline';
import { Tokenizer } from './tokenizer';

/**
 * A search result from the index.
 */
export interface SearchResult<T> {
  /**
   * The search result score.
   */
  score: number;

  /**
   * The ID of the document.
   */
  ref: DocRef<T>;

  /**
   * The document itself. Only returned if 'expand' is true.
   */
  doc?: T;
}

/**
 * Create a new search index and configure it with the default, or passed pipeline function
 * and default search configuration. Once created, documents may be added and removed, but the base
 * configuration is immutable.
 *
 * By default, the pipeline functions contain a trimmer, a stop word filter, and an english language
 * stemmer. You may provide your own.
 *
 * Example:
 *  let idx = new Index('id');
 *  idx.addField('id');
 *  idx.addField('title');
 *  idx.addField('body');
 *
 *       //this.setRef('id'); // default ref is 'id'
 *
 *       this.pipeline.add(function () {
 *         // some custom pipeline function
 *       });
 *     });
 *
 *    idx.addDoc({
 *      id: 1,
 *      title: 'Oracle released database 12g',
 *      body: 'Yestaday, Oracle has released their latest database, named 12g, more robust. this product will increase Oracle profit.'
 *    });
 *
 *    idx.addDoc({
 *      id: 2,
 *      title: 'Oracle released annual profit report',
 *      body: 'Yestaday, Oracle has released their annual profit report of 2015, total profit is 12.5 Billion.'
 *    });
 *
 *    # simple search
 *    idx.search('oracle database');
 *
 *    # search with query-time boosting
 *    idx.search('oracle database', {fields: {title: {boost: 2}, body: {boost: 1}}});
 */
export class Index<T> extends EventTarget {

  public readonly documentStore: DocumentStore<T>;

  private _fields: (keyof T)[] = [];

  private readonly pipeline: IndexPipeline;

  private tokenizer: Tokenizer = new Tokenizer();

  /**
   * Key frequency inversion index by field.
   */
  private fieldIndex: Map<keyof T, InvertedIndex<T>> = new Map<keyof T, InvertedIndex<T>>();

  /**
   * Inverse document frequency cache.
   */
  private _idfCache: Map<string, number> = new Map<string, number>();

  /**
   * Create a new index. At minimum the field name for the identifier is required,
   */
  constructor(ref: keyof T, private readonly config?: FieldConfiguration<T>, ...filters: IndexPipelineFunction[]) {
    super();

    // Set up the doc store and fields.
    this.documentStore = new DocumentStore<T>(ref);
    this.addField(ref);

    // Set up the pipeline.
    this.pipeline = new IndexPipeline(...filters);

    this.addEventListener('add', () => this._idfCache.clear());
    this.addEventListener('remove', () => this._idfCache.clear());
    this.addEventListener('update', () => this._idfCache.clear());
  }

  /**
   * The field used to identify the document ID.
   */
  public get idField(): keyof T {
    return this.documentStore.idField;
  }

  /**
   * Adds a field to the list of fields that will be searchable within documents in the index.
   *
   * Remember that inner index is build based on field, which means each field has one inverted index.
   *
   * Fields should be added before any documents are added to the index, fields
   * that are added after documents are added to the index will only apply to new
   * documents added to the index.
   */
  public addField(fieldName: keyof T): Index<T> {
    this._fields.push(fieldName);
    this.fieldIndex.set(fieldName, new InvertedIndex());
    return this;
  }

  /**
   * Add a JSON format document to the index.
   *
   * This is the way new documents enter the index, this function will run the
   * fields from the document through the index's pipeline and then add it to
   * the index, it will then show up in search results.
   *
   * An 'add' event is emitted with the document that has been added and the index
   * the document has been added to. This event can be silenced by passing false
   * as the second argument to add.
   */
  public addDoc(doc: T, emitEvent: boolean = true): void {
    if (!doc) {
      return;
    }
    const docRef: DocRef<T> = doc[this.idField];

    this.documentStore.addDoc(doc);

    for (let field of this._fields) {
      const fieldValue: T[keyof T] = doc[field];
      const tokens = this.tokenizer.tokenize(fieldValue);
      const fieldTokens = this.pipeline.run(tokens);
      this.documentStore.setFieldLength(docRef, field, fieldTokens.length);

      let tokenCount: { [key: string]: number } = {};

      for (let token of fieldTokens) {
        if (token in tokenCount) {
          tokenCount[token] += 1;
        } else {
          tokenCount[token] = 1;
        }
      }

      for (let token in tokenCount) {
        let termFrequency = tokenCount[token];
        termFrequency = Math.sqrt(termFrequency);
        this.fieldIndex.get(field).addToken(token, { ref: docRef, tf: termFrequency });
      }
    }

    if (emitEvent) {
      this.dispatchEvent(new Event('add'));
    }
  }

  /**
   * Removes a document from the index by doc ref.
   *
   * To make sure documents no longer show up in search results they can be
   * removed from the index using this method.
   *
   * A 'remove' event is emitted with the document that has been removed and the index
   * the document has been removed from. This event can be silenced by passing false
   * as the second argument to remove.
   *
   * If user setting DocumentStore not storing the documents, then remove doc by docRef is not allowed.
   */
  public removeDocByRef(docRef: DocRef<T>, emitEvent: boolean = true) {
    this.removeDoc(this.documentStore.getDoc(docRef), emitEvent);
  }

  /**
   * Removes a document from the index.
   * This remove operation could work even the original doc is not store in the DocumentStore.
   *
   * To make sure documents no longer show up in search results they can be
   * removed from the index using this method.
   *
   * A 'remove' event is emitted with the document that has been removed and the index
   * the document has been removed from. This event can be silenced by passing false
   * as the second argument to remove.
   */
  public removeDoc(doc: T, emitEvent: boolean = true) {
    if (!doc) {
      return;
    }

    const docRef = doc[this.idField];
    if (!this.documentStore.hasDoc(docRef)) {
      return;
    }
    this.documentStore.removeDoc(docRef);

    for (let field of this._fields) {
      const tokens = this.tokenizer.tokenize(doc[field]);
      const fieldTokens = this.pipeline.run(tokens);
      for (let token of fieldTokens) {
        this.fieldIndex.get(field).removeToken(token, docRef);
      }
    }

    if (emitEvent) {
      this.dispatchEvent(new Event('remove'));
    }
  }

  /**
   * Updates a document in the index.
   *
   * When a document contained within the index gets updated, fields changed,
   * added or removed, to make sure it correctly matched against search queries,
   * it should be updated in the index.
   *
   * This method is just a wrapper around `remove` and `add`
   *
   * An 'update' event is emitted with the document that has been updated and the index.
   * This event can be silenced by passing false as the second argument to update. Only
   * an update event will be fired, the 'add' and 'remove' events of the underlying calls
   * are silenced.
   */
  public updateDoc(doc: T, emitEvent: boolean = true) {
    // Get the current document from the store, so we can
    // delete the stored keys instead of the new ones.
    const ref = doc[this.idField];
    this.removeDocByRef(ref, false);
    this.addDoc(doc, false);

    if (emitEvent) {
      this.dispatchEvent(new Event('update'));
    }
  }

  /**
   * Get fields of current index instance
   */
  public getFields(): (keyof T)[] {
    return this._fields.slice();
  }

  /**
   * Searches the index using the passed query.
   * Queries should be a string, multiple words are allowed.
   *
   * If config is null, will search all fields by default, and lead to OR based query.
   * If config is specified, will search specified with query time boosting.
   *
   * All query tokens are passed through the same pipeline that document tokens
   * are passed through, so any language processing involved will be run on every
   * query term.
   *
   * Each query term is expanded, so that the term 'he' might be expanded to
   * 'hello' and 'help' if those terms were already included in the index.
   *
   * Matching documents are returned as an array of objects, each object contains
   * the matching document ref, as set for this index, and the similarity score
   * for this document against the query.
   */
  public search(query: string, userConfig?: FieldConfiguration<T>): SearchResult<T>[] {
    // Fast exit
    if (!query) {
      return [];
    }

    const config = new Configuration(this.getFields(), userConfig || this.config).get();
    const queryTokens = this.pipeline.run(this.tokenizer.tokenize(query));
    const queryResults = new Map<DocRef<T>, number>();

    for (let field in config.fields) {
      const fieldSearchResults = this.fieldSearch(queryTokens, field, config);
      const fieldBoost = config.fields[field].boost;
      for (let docRef of fieldSearchResults.keys()) {
        fieldSearchResults.set(docRef, fieldSearchResults.get(docRef) * fieldBoost);
      }

      for (let docRef of fieldSearchResults.keys()) {
        if (queryResults.has(docRef)) {
          queryResults.set(docRef, queryResults.get(docRef) + fieldSearchResults.get(docRef));
        } else {
          queryResults.set(docRef, fieldSearchResults.get(docRef));
        }
      }
    }

    let results = [];
    for (let docRef of queryResults.keys()) {
      results.push({ ref: docRef, score: queryResults.get(docRef) });
    }

    results.sort(function(a, b) {
      return b.score - a.score;
    });
    return results;
  }

  /**
   * Search for the query tokens in the specified document field
   * search queryTokens in specified field.
   */
  public fieldSearch(queryTokens: string[], fieldName: keyof T, config: FieldConfiguration<T>): Map<DocRef<T>, number> {
    const booleanType = config.fields[fieldName].bool;
    const expand = config.fields[fieldName].expand;
    const boost = config.fields[fieldName].boost;
    let scores: Map<DocRef<T>, number> = null;
    let docTokens = new Map<DocRef<T>, string[]>();

    // Do nothing if the boost is 0
    if (boost === 0) {
      return new Map<DocRef<T>, number>();
    }

    for (let token of queryTokens) {
      let tokens = [token];
      if (expand == true) {
        tokens = this.fieldIndex.get(fieldName).expandToken(token);
      }

      // Consider every query token in turn. If expanded, each query token
      // corresponds to a set of tokens, which is all tokens in the
      // index matching the pattern queryToken* .
      // For the set of tokens corresponding to a query token, find and score
      // all matching documents. Store those scores in queryTokenScores,
      // keyed by docRef.
      // Then, depending on the value of booleanType, combine the scores
      // for this query token with previous scores.  If booleanType is OR,
      // then merge the scores by summing into the accumulated total, adding
      // new document scores are required (effectively a union operator).
      // If booleanType is AND, accumulate scores only if the document
      // has previously been scored by another query token (an intersection
      // operation0.
      // Furthermore, since when booleanType is AND, additional
      // query tokens can't add new documents to the result set, use the
      // current document set to limit the processing of each new query
      // token for efficiency (i.e., incremental intersection).

      const queryTokenScores = new Map<DocRef<T>, number>();
      for (let key of tokens) {
        let docs = this.fieldIndex.get(fieldName).getDocs(key);
        let idf = this.idf(key, fieldName);

        if (scores && booleanType == 'AND') {
          // special case, we can rule out documents that have been
          // already been filtered out because they weren't scored
          // by previous query token passes.
          let filteredDocs: Map<DocRef<T>, DocInfo<T>> = new Map<DocRef<T>, DocInfo<T>>();
          for (let docRef of scores.keys()) {
            if (docs.has(docRef)) {
              filteredDocs.set(docRef, docs.get(docRef));
            }
          }
          docs = filteredDocs;
        }

        // only record appeared token for retrieved documents for the
        // original token, not for expanded token.
        // because for doing coordNorm for a retrieved document, coordNorm only care how many
        // query token appear in that document.
        // so expanded token should not be added into docTokens, if added, this will pollute the
        // coordNorm
        if (key == token) {
          this.fieldSearchStats(docTokens, key, docs);
        }

        for (let docRef of docs.keys()) {
          const tf = this.fieldIndex.get(fieldName).getTermFrequency(key, docRef);
          const fieldLength = this.documentStore.getFieldLength(docRef, fieldName);
          let fieldLengthNorm = 1;
          if (fieldLength != 0) {
            fieldLengthNorm = 1 / Math.sqrt(fieldLength);
          }

          let penalty = 1;
          if (key != token) {
            // currently I'm not sure if this penality is enough,
            // need to do verification
            penalty = (1 - (key.length - token.length) / key.length) * 0.15;
          }

          const score = tf * idf * fieldLengthNorm * penalty;
          if (queryTokenScores.has(docRef)) {
            queryTokenScores.set(docRef, queryTokenScores.get(docRef) + score);
          } else {
            queryTokenScores.set(docRef, score);
          }
        }
      }

      scores = this.mergeScores(scores, queryTokenScores, booleanType);
    }

    return this.coordNorm(scores, docTokens, queryTokens.length);
  }

  /**
   * Get the field access index for a particular field.
   */
  public getFieldIndex(field: keyof T): InvertedIndex<T> {
    return this.fieldIndex.get(field);
  }

  /**
   * Calculates the inverse document frequency for a token within the index of a field.
   */
  public idf(term: string, field: keyof T): number {
    let cacheKey = '@' + field + '/' + term;
    if (this._idfCache.has(cacheKey)) {
      return this._idfCache.get(cacheKey);
    }

    const df = this.fieldIndex.get(field).getDocFreq(term);
    let idf = 1 + Math.log(this.documentStore.length / (df + 1));
    this._idfCache.set(cacheKey, idf);
    return idf;
  }

  /**
   * Clear the index of all documents and caches. Fields and refs are retained.
   */
  private clear(): void {
    this.fieldIndex.clear();
    this._idfCache.clear();
    this.documentStore.clear();
  }

  /**
   * Merge the scores from one set of tokens into an accumulated score table.
   * Exact operation depends on the op parameter. If op is 'AND', then only the
   * intersection of the two score lists is retained. Otherwise, the union of
   * the two score lists is returned. For internal use only.
   */
  private mergeScores(accumScores: Map<DocRef<T>, number>, scores: Map<DocRef<T>, number>, op: 'AND' | 'OR'): Map<DocRef<T>, number> {
    if (!accumScores) {
      return scores;
    }
    if (op == 'AND') {
      let intersection = new Map<DocRef<T>, number>();
      for (let docRef of scores.keys()) {
        if (accumScores.has(docRef)) {
          intersection.set(docRef, accumScores.get(docRef) + scores.get(docRef));
        }
      }
      return intersection;
    } else {
      for (let docRef of scores.keys()) {
        if (accumScores.has(docRef)) {
          accumScores.set(docRef, accumScores.get(docRef) + scores.get(docRef));
        } else {
          accumScores.set(docRef, scores.get(docRef));
        }
      }
      return accumScores;
    }
  }

  /**
   * Record the occuring query token of retrieved doc specified by doc field.
   * Only for inner user.
   */
  private fieldSearchStats(docTokens: Map<DocRef<T>, string[]>, token: string, docs: Map<DocRef<T>, DocInfo<T>>) {
    for (let doc of docs.keys()) {
      if (docTokens.has(doc)) {
        docTokens.get(doc).push(token);
      } else {
        docTokens.set(doc, [token]);
      }
    }
  }

  /**
   * coord norm the score of a doc.
   * if a doc contain more query tokens, then the score will larger than the doc
   * contains less query tokens.
   */
  private coordNorm(scores: Map<DocRef<T>, number>, docTokens: Map<DocRef<T>, string[]>, n: number) {
    for (let doc of scores.keys()) {
      if (!docTokens.has(doc)) {
        continue;
      }
      const tokens = docTokens.get(doc).length;
      scores.set(doc, scores.get(doc) * tokens / n);
    }

    return scores;
  }
}
