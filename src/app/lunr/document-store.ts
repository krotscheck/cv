/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

/**
 * The type of a document's unique identifier. These are usually either strings or numbers; usually the former.
 */
export type DocRef<T> = T[keyof T];

/**
 * DocumentStore is a simple key-value document store used for storing sets of tokens for
 * documents stored in index. It stores both the original document and the field
 * length for each encountered value.
 */
export class DocumentStore<T> {

  /**
   * Stored documents that have been indexed.
   */
  private readonly docs: Map<DocRef<T>, T | undefined> = new Map<DocRef<T>, T | undefined>();

  /**
   * A stored map of docs->fields->fieldLength
   */
  private readonly docInfo: Map<DocRef<T>, Map<keyof T, number>> = new Map<DocRef<T>, Map<keyof T, number>>();

  /**
   * The ID by which this document is identified.
   */
  private readonly _idField: keyof T;

  /**
   * In memory store of the documents used in the search.
   */
  constructor(idField: keyof T) {
    this._idField = idField;
  }

  /**
   * The current size of the document store.
   */
  public get length(): number {
    return this.docInfo.size;
  }

  /**
   * The ID by which the document is identified.
   */
  public get idField(): keyof T {
    return this._idField;
  }

  /**
   * Stores the given doc in the document store against the given id.
   * If docRef already exist, then update doc.
   *
   * Document is store by original JSON format, then you could use original document to generate search snippets.
   */
  public addDoc(doc: T): void {
    const docRef: DocRef<T> = doc[this.idField];
    this.docs.set(docRef, this.clone(doc));
    this.docInfo.set(docRef, new Map<keyof T, number>());
  }

  /**
   * Reset the document store and clear out all values.
   */
  public clear(): void {
    this.docInfo.clear();
    this.docs.clear();
  }

  /**
   * Retrieves the JSON doc from the document store for a given key.
   *
   * If docRef not found, return null.
   * If user set not storing the documents, return null.
   */
  public getDoc(ref: DocRef<T>): T | undefined {
    return this.docs.get(ref);
  }

  /**
   * Checks whether the document store contains a key (docRef).
   */
  public hasDoc(ref: DocRef<T>): boolean {
    return this.docs.has(ref);
  }

  /**
   * Removes the value for a key in the document store.
   */
  public removeDoc(ref: DocRef<T>): void {
    this.docs.delete(ref);
    this.docInfo.delete(ref);
  }

  /**
   * Add field length of a document's field tokens from pipeline results.
   * The field length of a document is used to do field length normalization
   * even without the original JSON document stored.
   */
  public setFieldLength(ref: DocRef<T>, fieldName: keyof T, length: number): void {
    if (!ref || !this.hasDoc(ref)) {
      return;
    }
    if (!this.docInfo.has(ref)) {
      this.docInfo.set(ref, new Map<keyof T, number>());
    }
    this.docInfo.get(ref).set(fieldName, length);
  }

  /**
   * get field length of a document by docRef
   */
  public getFieldLength(docRef: DocRef<T>, fieldName: keyof T): number {
    return this.docInfo?.get(docRef)?.get(fieldName) || 0;
  }

  /**
   * Cloning object
   */
  private clone<T>(obj: T): T {
    if (null === obj || 'object' !== typeof obj) {
      return obj;
    }

    let copy = obj.constructor();

    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = obj[attr];
      }
    }

    return copy;
  }

}
