/*
 * Copyright (c) 2019. Michael Krotscheck, all rights reserved.
 */

/**
 * Lunr's document store.
 */
export interface ElasticLunrDocumentStore<T> {
  /**
   * Get the stored doc.
   */
  getDoc(docRef: string | number): T;

  /**
   * Does this doc exist?
   */
  hasDoc(docRef: string | number): boolean;
}
