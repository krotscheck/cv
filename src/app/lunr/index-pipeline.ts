/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { stemmer } from './filters/stemmer';
import { defaultStopWordFilter } from './filters/stopword';
import { trimmer } from './filters/trimmer';

/**
 * Pipeline function type.
 */
export type IndexPipelineFunction = ((token: string, i: number, tokens: string[]) => string)

/**
 * Pipelines maintain an ordered list of functions to be applied to
 * both documents tokens and query tokens.
 *
 * An instance of Index will contain a pipeline with a trimmer, a stop word filter,
 * an English stemmer. Extra functions can be added before or after either of these
 * functions or these default functions can be removed.
 *
 * The output of the functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 */
export class IndexPipeline {

  /**
   * List of pipeline functions in order queue.
   */
  private readonly _queue: IndexPipelineFunction[] = [];

  constructor(...queue: IndexPipelineFunction[]) {
    if (queue.length == 0) {
      this._queue = [
        trimmer,
        defaultStopWordFilter(),
        stemmer
      ];
    } else {
      this._queue = queue;
    }
  }

  /**
   * The length of the pipeline.
   */
  public get length(): number {
    return this._queue.length;
  }

  /**
   * Runs the current list of functions that registered in the pipeline against the
   * input tokens.
   */
  public run(tokens: string[]): string[] {
    const out = [];
    const tokenLength = tokens.length;
    const pipelineLength = this._queue.length;

    for (let i = 0; i < tokenLength; i++) {
      let token = tokens[i];

      for (let j = 0; j < pipelineLength; j++) {
        token = this._queue[j](token, i, tokens);
        if (!token) {
          break;
        }
      }

      if (!!token) {
        out.push(token);
      }
    }

    return out;
  };
}
