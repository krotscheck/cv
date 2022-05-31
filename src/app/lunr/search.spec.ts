/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { Index } from './index';
import { TestDoc } from './test/test-doc';

describe('Searching', () => {
  const idx = new Index<TestDoc>('id');
  idx.addField('body');
  idx.addField('title');

  [
    {
      id: 'a',
      title: 'Mr. Green kills Colonel Mustard',
      body: 'Mr. Green killed Colonel Mustard in the study with the candlestick. Mr. Green is not a very nice fellow.',
      wordCount: 19
    },
    {
      id: 'b',
      title: 'Plumb waters green plant ',
      body: 'Professor Plumb has a green plant in his study',
      wordCount: 9
    },
    {
      id: 'c',
      title: 'Scarlett helps Professor',
      body: 'Miss Scarlett watered Professor Plumbs green plant while he was away from his office last week.',
      wordCount: 16
    },
    {
      id: 'd',
      title: 'title',
      body: 'handsome'
    },
    {
      id: 'e',
      title: 'title abc',
      body: 'hand'
    }
  ].forEach((doc) => idx.addDoc(doc));

  it('returning the correct results', () => {
    const results = idx.search('green plant');
    expect(results.length).toEqual( 3);
    expect(results[0].ref).toEqual( 'b');
  });

  it('search term not in the index', () => {
    const results = idx.search('foo');

    expect(results.length).toEqual( 0);
  });

  it('one search term not in the index', () => {
    const results = idx.search('foo green');

    expect(results.length).toEqual( 3);
  });

  it('search contains one term not in the index', () => {
    const results = idx.search('green foo');

    expect(results.length).toEqual( 3);
  });

  it('search takes into account boosts', () => {
    const results = idx.search('professor');

    expect(results.length).toEqual( 2);
    expect(results[0].ref).toEqual( 'c');
  });

  it('search boosts exact matches', () => {
    const results = idx.search('title');

    expect(results.length).toEqual( 2);
    expect(results[0].ref).toEqual( 'd');
  });

  it('search skips on 0 boost fields', () => {
    const results = idx.search('plant', { fields: { title: { boost: 1 }, body: { boost: 0 } } });

    expect(results.length).toEqual( 1);
    expect(results[0].ref).toEqual( 'b');
  });

});
