/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { IndexPipeline, IndexPipelineFunction } from './index-pipeline';

describe(IndexPipeline.name, () => {

  const noop: IndexPipelineFunction = (token, i, tokens) => {
    return token;
  };

  it('adding a new item to the pipeline', () => {
    let pipeline = new IndexPipeline();
    expect(pipeline.length).toEqual(3);

    pipeline = new IndexPipeline(noop);
    expect(pipeline.length).toEqual(1);
  });

  it('adding multiple items to the pipeline in one go', () => {
    const pipeline = new IndexPipeline(noop, noop);
    expect(pipeline.length).toEqual(2);
  });

  it('run calls each member of the pipeline for each input', () => {
    let count1 = 0;
    let count2 = 0;
    const fn1: IndexPipelineFunction = (token) => {
      count1++;
      return token;
    };
    const fn2: IndexPipelineFunction = (token) => {
      count2++;
      return token;
    };
    const pipeline = new IndexPipeline(fn1, fn2);
    pipeline.run(['1', '2', '3']);

    expect(count1).toEqual(3);
    expect(count2).toEqual(3);
  });

  it('run should pass three inputs to the pipeline fn', () => {
    let input, index, arr;
    const fn1: IndexPipelineFunction = (token, i, tokens) => {
      input = token;
      index = i;
      arr = tokens;
      return token;
    };

    const pipeline = new IndexPipeline(fn1);
    pipeline.run(['a']);

    expect(input).toEqual('a');
    expect(index).toEqual(0);
    expect(arr).toEqual(['a']);
  });

  it('run should pass the output of one into the input of the next', () => {
    let output: string;
    const fn1: IndexPipelineFunction = (token) => token.toUpperCase();
    const fn2: IndexPipelineFunction = (token) => {
      output = token;
      return token;
    };
    const pipeline = new IndexPipeline(fn1, fn2);
    pipeline.run(['a']);
    expect(output).toEqual('A');
  });

  it('run should return the result of running the entire pipeline on each element', () => {
    const fn1: IndexPipelineFunction = (token) => token.toUpperCase();

    const pipeline = new IndexPipeline(fn1);
    expect(pipeline.run(['a'])).toEqual(['A']);
  });

  it('run should filter out any undefined values at each stage in the pipeline', () => {
    let fn2Count = 0;
    const fn1: IndexPipelineFunction = (t) => {
      if (parseInt(t) < 5) {
        return t;
      }
      return undefined;
    };
    const fn2: IndexPipelineFunction = (t) => {
      fn2Count++;
      return t;
    };
    const pipeline = new IndexPipeline(fn1, fn2);
    const output = pipeline.run(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    expect(fn2Count).toEqual(5);
    expect(output.length).toEqual(5);
  });
});
