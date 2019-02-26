/*
 * Copyright (c) 2019. Michael Krotscheck, all rights reserved.
 */

/**
 * Result from an ElasticLunr search.
 */
export interface ElasticLunrResult {

  /**
   * An elastic lunr reference.
   */
  ref: string;

  /**
   * The index score for this doc.
   */
  score: number;

}
