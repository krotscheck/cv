/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { Tokenizer } from './tokenizer';

describe(Tokenizer.name, () => {

  describe('Default Separator', () => {
    const tokenizer = new Tokenizer();

    it('splitting simple strings into tokens', () => {
      const simpleString = 'this is a simple string';
      const tokens = tokenizer.tokenize(simpleString);

      expect(tokens).toEqual(['this', 'is', 'a', 'simple', 'string']);
    });

    it('downcasing tokens', () => {
      const simpleString = 'FOO BAR';
      const tags = ['Foo', 'BAR'];

      expect(tokenizer.tokenize(simpleString)).toEqual(['foo', 'bar']);
      expect(tokenizer.tokenize(...tags)).toEqual(['foo', 'bar']);
    });

    it('handling arrays of strings', () => {
      const tags = ['foo', 'bar'];
      const tokens = tokenizer.tokenize(...tags);
      expect(tokens).toEqual(tags);
    });

    it('handling arrays with undefined or null values', () => {
      const arr = ['foo', undefined, null, 'bar'];
      const tokens = tokenizer.tokenize(...arr);
      expect(tokens).toEqual(['foo', 'bar']);
    });

    it('handling multiple white spaces', () => {
      const testString = '  foo    bar  ';
      const tokens = tokenizer.tokenize(testString);
      expect(tokens).toEqual(['foo', 'bar']);
    });

    it('handling null-like arguments', () => {
      expect(tokenizer.tokenize()).toEqual([]);
      expect(tokenizer.tokenize(null)).toEqual([]);
      expect(tokenizer.tokenize(undefined)).toEqual([]);
    });

    it('calling toString on passed val', () => {
      const date = new Date(Date.UTC(2013, 0, 1, 12)),
        obj = {
          toString: () => {
            return 'custom object';
          }
        };

      expect(tokenizer.tokenize(41)).toEqual(['41']);
      expect(tokenizer.tokenize(false)).toEqual(['false']);
      expect(tokenizer.tokenize(obj)).toEqual(['custom', 'object']);

      // slicing here to avoid asserting on the timezone part of the date
      // that will be different whereever the test is run.
      expect(tokenizer.tokenize(date).slice(0, 4)).toEqual(['tue', 'jan', '01', '2013']);
    });

    it('splitting strings with hyphens', () => {
      const simpleString = 'take the New York-San Francisco flight';
      const tokens = tokenizer.tokenize(simpleString);
      expect(tokens).toEqual(['take', 'the', 'new', 'york', 'san', 'francisco', 'flight']);
    });

    it('splitting strings with hyphens and spaces', () => {
      const simpleString = 'Solve for A - B';
      const tokens = tokenizer.tokenize(simpleString);

      expect(tokens).toEqual(['solve', 'for', 'a', 'b']);
    });

    it('tokenize array', () => {
      const str = ['hello world', 'glad to see you'];
      const tokens = tokenizer.tokenize(...str);
      expect(tokens).toEqual(['hello', 'world', 'glad', 'to', 'see', 'you']);
    });

    it('tokenize array 2', () => {
      const str = ['helloworld', 'glad to see you'];
      const tokens = tokenizer.tokenize(...str);
      expect(tokens).toEqual(['helloworld', 'glad', 'to', 'see', 'you']);
    });

    it('tokenize array', () => {
      const str = ['helloworld', null, undefined, 'glad to see you'];
      const tokens = tokenizer.tokenize(...str);
      expect(tokens).toEqual(['helloworld', 'glad', 'to', 'see', 'you']);
    });

    it('tokenize array', () => {
      const str = ['helloworld', 'glad to see you', 'hyper-parameters'];
      const tokens = tokenizer.tokenize(...str);
      expect(tokens).toEqual(['helloworld', 'glad', 'to', 'see', 'you', 'hyper', 'parameters']);
    });

  });

  describe('Custom separator', () => {

    it('separator 1', () => {
      const tokenizer = new Tokenizer(/[\/]+/);
      const s = 'hello/world/I/love';
      expect(tokenizer.tokenize(s)).toEqual(['hello', 'world', 'i', 'love']);
    });

    it('separator 2', () => {
      const tokenizer = new Tokenizer(/[\\]+/);
      const s = 'hello\\world\\I\\love';
      expect(tokenizer.tokenize(s)).toEqual(['hello', 'world', 'i', 'love']);
    });

    it('separator 3', () => {
      const tokenizer = new Tokenizer(/[\/\%]+/);
      const s = 'hello/world/%%%apple%pie';
      expect(tokenizer.tokenize(s)).toEqual(['hello', 'world', 'apple', 'pie']);
    });
  });
});
