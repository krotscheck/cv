/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { defaultStopWordFilter, stopWordFilter } from './stopword';

describe('stopword', () => {

  describe('default stopwords', () => {

    const filter = defaultStopWordFilter();

    it('stops stop words', function() {
      const stopWords = ['the', 'and', 'but', 'than', 'when'];

      for (let i = 0; i < stopWords.length; i++) {
        const word = stopWords[i];
        expect(filter(word, i, stopWords)).toEqual(undefined);
      }
    });

    it('non stop words pass through', function() {
      const nonStopWords = ['interesting', 'words', 'pass', 'through'];

      for (let i = 0; i < nonStopWords.length; i++) {
        const word = nonStopWords[i];
        expect(filter(word, i, nonStopWords)).toEqual(word);
      }
    });

    it('should not filter Object.prototype terms', function() {
      const nonStopWords = ['constructor', 'hasOwnProperty', 'toString', 'valueOf'];

      for (let i = 0; i < nonStopWords.length; i++) {
        const word = nonStopWords[i];
        expect(filter(word, i, nonStopWords)).toEqual(word);
      }
    });

    it('it can ignore undefined values', function() {
      expect(filter(undefined, 0, [undefined])).toEqual(undefined);
      expect(filter(null, 0, [null])).toEqual(undefined);
    });
  });

  describe('custom stopword filter', () => {
    const filter = stopWordFilter('hello', 'world', 'microsoft', 'TTS');

    it('stops custom stopwords', function() {
      const stopWords = ['hello', 'world', 'microsoft', 'TTS'];

      for (let i = 0; i < stopWords.length; i++) {
        const word = stopWords[i];
        expect(filter(word, i, stopWords)).toEqual(undefined);
      }
    });

    it('passes anything else through', function() {
      const nonStopWords = ['interesting', 'words', 'pass', 'through'];

      for (let i = 0; i < nonStopWords.length; i++) {
        const word = nonStopWords[i];
        expect(filter(word, i, nonStopWords)).toEqual(word);
      }
    });

    it('it can handle undefined values', function() {
      expect(filter(undefined, 0, [undefined])).toEqual(undefined);
      expect(filter(null, 0, [null])).toEqual(undefined);
    });
  });

});
