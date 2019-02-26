/*
 * Copyright (c) 2019. Michael Krotscheck, all rights reserved.
 */

import { ElasticLunrDocumentStore } from './elasticlunr.documentstore';
import { ElasticLunrResult } from './elasticlunr.result';

export interface ElasticLunrIndex<T> {

  /**
   * The internal document store, which can be used to resolve the docs.
   */
  documentStore: ElasticLunrDocumentStore<T>;

  /**
   * Adds a field to the list of fields that will be searchable within documents in the index.
   *
   * Remember that inner index is build based on field, which means each field has one inverted index.
   *
   * Fields should be added before any documents are added to the index, fields
   * that are added after documents are added to the index will only apply to new
   * documents added to the index.
   */
  addField(name: string): ElasticLunrIndex<T>;

  /**
   * Sets the property used to uniquely identify documents added to the index,
   * by default this property is 'id'.
   *
   * This should only be changed before adding documents to the index, changing
   * the ref property without resetting the index can lead to unexpected results.
   */
  setRef(ref: string): ElasticLunrIndex<T>;

  /**
   * Set if the JSON format original documents are save into elasticlunr.DocumentStore
   * Defaultly save all the original JSON documents.
   */
  saveDocument(save: boolean): ElasticLunrIndex<T>;

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
  addDoc(doc: T): ElasticLunrIndex<T>;

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
  removeDocByRef(docRef: string | number, emitEvent?: boolean): void;

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
  removeDoc(doc: Partial<T>, emitEvent?: boolean): void;

  /**
   * Updates a document in the index.
   *
   * When a document contained within the index gets updated, fields changed,
   * added or removed, to make sure it correctly matched against search queries,
   * it should be updated in the index.
   *
   * This method is just a wrapper around remove and add
   *
   * An 'update' event is emitted with the document that has been updated and the index.
   * This event can be silenced by passing false as the second argument to update. Only
   * an update event will be fired, the 'add' and 'remove' events of the underlying calls
   * are silenced.
   */
  updateDoc(doc: Partial<T>, emitEvent?: boolean): void;

  /**
   * Get fields of current index instance
   */
  getFields(): string[];

  /**
   * Searches the index using the passed query.
   * Queries should be a string, multiple words are allowed.
   *
   * If config is null, will search all fields defaultly, and lead to OR based query.
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
  search(searchString: string, options: {}): ElasticLunrResult[];
}
