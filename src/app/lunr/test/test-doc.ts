/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

/**
 * A test document type for our search index tests.
 */
export interface TestDoc {

  id: string;

  title?: string;

  body?: string;

  unindexed?: string;
}
