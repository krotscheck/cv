/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { DocInfo, InvertedIndex } from './inverted-index';
import { TestDoc } from './test/test-doc';

describe(InvertedIndex.name, () => {

  it('adding a token to the invertedIndex', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const token = 'foo';

    invertedIndex.addToken(token, doc);

    expect(invertedIndex.getDocFreq('foo')).toEqual(1);
    expect(invertedIndex.getTermFrequency('foo', '123')).toEqual(1);
  });

  it('test hasToken() function', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const token = 'foo';

    invertedIndex.addToken(token, doc);
    expect(invertedIndex.hasToken(token)).toBeTrue();
    expect(invertedIndex.hasToken('fo')).toBeTrue();
    expect(invertedIndex.hasToken('f')).toBeTrue();

    expect(!invertedIndex.hasToken('bar')).toBeTrue();
    expect(!invertedIndex.hasToken('foo ')).toBeTrue();
    expect(!invertedIndex.hasToken('foo  ')).toBeTrue();
  });

  it('adding another document to the token', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const doc2: DocInfo<TestDoc> = { ref: '456', tf: 1 };
    const token = 'foo';

    invertedIndex.addToken(token, doc1);
    invertedIndex.addToken(token, doc2);

    expect(invertedIndex.getTermFrequency('foo', '123')).toEqual(1);
    expect(invertedIndex.getTermFrequency('foo', '456')).toEqual(1);
    expect(invertedIndex.getDocFreq('foo')).toEqual(2);
  });

  it('test df of none-existing token', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const doc2: DocInfo<TestDoc> = { ref: '456', tf: 1 };
    const token = 'foo';

    invertedIndex.addToken(token, doc1);
    invertedIndex.addToken(token, doc2);

    expect(invertedIndex.getDocFreq('foo')).toEqual(2);
    expect(invertedIndex.getDocFreq('fox')).toEqual(0);
  });

  it('adding existing doc', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const doc2: DocInfo<TestDoc> = { ref: '456', tf: 1 };
    const token = 'foo';

    invertedIndex.addToken(token, doc1);
    invertedIndex.addToken(token, doc2);
    invertedIndex.addToken(token, { ref: '456', tf: 100 });

    expect(invertedIndex.getTermFrequency('foo', '456')).toEqual(100);
    expect(invertedIndex.getDocFreq('foo')).toEqual(2);
  });

  it('checking if a token exists in the invertedIndex', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const token = 'foo';

    invertedIndex.addToken(token, doc);

    expect(invertedIndex.hasToken(token)).toBeTrue();
  });

  it('checking if a token does not exist in the invertedIndex', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const token = 'foo';

    invertedIndex.addToken(token, doc);
    expect(!invertedIndex.hasToken('fooo')).toBeTrue();
    expect(!invertedIndex.hasToken('bar')).toBeTrue();
    expect(!invertedIndex.hasToken('fof')).toBeTrue();
  });

  it('retrieving items from the invertedIndex', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const token = 'foo';

    invertedIndex.addToken(token, doc);
    expect(invertedIndex.getDocs(token).get('123')).toEqual({ ref: '123', tf: 1 });
    expect(invertedIndex.getDocs('').size).toEqual(0);

    invertedIndex.addToken('boo', { ref: '234', tf: 100 });
    invertedIndex.addToken('too', { ref: '345', tf: 101 });

    expect(invertedIndex.getDocs(token).get('123')).toEqual({ ref: '123', tf: 1 });

    invertedIndex.addToken(token, { ref: '234', tf: 100 });
    invertedIndex.addToken(token, { ref: '345', tf: 101 });

    const docs = invertedIndex.getDocs(token);
    expect(docs.get('123')).toEqual({ ref: '123', tf: 1 });
    expect(docs.get('234')).toEqual({ ref: '234', tf: 100 });
    expect(docs.get('345')).toEqual({ ref: '345', tf: 101 });
  });

  it('retrieving items that do not exist in the invertedIndex', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    expect(invertedIndex.getDocs('foo').size).toEqual(0);
    expect(invertedIndex.getDocs('fox').size).toEqual(0);
  });

  it('test df of items in the invertedIndex', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const doc2: DocInfo<TestDoc> = { ref: '456', tf: 1 };
    const doc3: DocInfo<TestDoc> = { ref: '789', tf: 1 };

    invertedIndex.addToken('foo', doc1);
    invertedIndex.addToken('foo', doc2);
    invertedIndex.addToken('bar', doc3);

    expect(invertedIndex.getDocFreq('foo')).toEqual(2);
    expect(invertedIndex.getDocFreq('bar')).toEqual(1);
    expect(invertedIndex.getDocFreq('baz')).toEqual(0);
    expect(invertedIndex.getDocFreq('ba')).toEqual(0);
    expect(invertedIndex.getDocFreq('b')).toEqual(0);
    expect(invertedIndex.getDocFreq('fo')).toEqual(0);
    expect(invertedIndex.getDocFreq('f')).toEqual(0);
  });

  it('removing a document from the token invertedIndex', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };

    expect(invertedIndex.getDocs('foo').size).toEqual(0);

    invertedIndex.addToken('foo', doc);
    expect(invertedIndex.getDocs('foo').get('123')).toEqual({ ref: '123', tf: 1 });

    invertedIndex.removeToken('foo', '123');
    expect(invertedIndex.getDocs('foo').size).toEqual(0);
    expect(invertedIndex.getDocFreq('foo')).toEqual(0);
    expect(invertedIndex.hasToken('foo')).toEqual(true);
  });

  it('removing a document that is not in the invertedIndex', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 1 };
    const doc2: DocInfo<TestDoc> = { ref: '567', tf: 1 };

    invertedIndex.addToken('foo', doc1);
    invertedIndex.addToken('bar', doc2);
    invertedIndex.removeToken('foo', '456');

    const docs = invertedIndex.getDocs('foo');
    expect(docs.has('123')).toBeTrue();
    expect(docs.get('123')).toEqual({ ref: '123', tf: 1 });
    expect(invertedIndex.getDocFreq('foo')).toEqual(1);
  });

  it('removing a document from a key that does not exist', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();

    invertedIndex.removeToken('foo', '123');
    expect(!invertedIndex.hasToken('foo')).toBeTrue();
    expect(invertedIndex.getDocFreq('foo')).toEqual(0);
  });

  it('expand a token into all descendent tokens', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };

    invertedIndex.addToken('hell', doc);
    invertedIndex.addToken('hello', doc);
    invertedIndex.addToken('help', doc);
    invertedIndex.addToken('held', doc);
    invertedIndex.addToken('foo', doc);
    invertedIndex.addToken('bar', doc);

    const tokens = invertedIndex.expandToken('hel');
    expect(tokens).toEqual(['hell', 'hello', 'help', 'held']);

    expect(invertedIndex.expandToken('hell')).toEqual(['hell', 'hello']);
    expect(invertedIndex.expandToken('he')).toEqual(['hell', 'hello', 'help', 'held']);
    expect(invertedIndex.expandToken('h')).toEqual(['hell', 'hello', 'help', 'held']);
  });

  it('expand a non existing token', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };

    invertedIndex.addToken('hell', doc);
    invertedIndex.addToken('hello', doc);
    invertedIndex.addToken('help', doc);
    invertedIndex.addToken('held', doc);
    invertedIndex.addToken('foo', doc);
    invertedIndex.addToken('bar', doc);

    const tokens = invertedIndex.expandToken('wax');
    expect(tokens).toEqual([]);
  });

  it('expand a existing token without descendent tokens', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc: DocInfo<TestDoc> = { ref: '123', tf: 1 };

    invertedIndex.addToken('hello', doc);
    invertedIndex.addToken('hellp', doc);
    invertedIndex.addToken('helld', doc);
    invertedIndex.addToken('helldd', doc);
    invertedIndex.addToken('hellddda', doc);
    invertedIndex.addToken('hell', doc);
    invertedIndex.addToken('help', doc);
    invertedIndex.addToken('held', doc);
    invertedIndex.addToken('foo', doc);
    invertedIndex.addToken('bar', doc);

    const tokens = invertedIndex.expandToken('hello');
    expect(tokens).toEqual(['hello']);
  });

  it('test get term frequency from inverted index', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 2 };
    const doc2: DocInfo<TestDoc> = { ref: '456', tf: 3 };
    const token = 'foo';

    invertedIndex.addToken(token, doc1);
    invertedIndex.addToken(token, doc2);

    expect(invertedIndex.getTermFrequency(token, '123')).toEqual(2);
    expect(invertedIndex.getTermFrequency(token, '456')).toEqual(3);
    expect(invertedIndex.getTermFrequency(token, '789')).toEqual(0);
  });

  it('test get term frequency from inverted index by non-exist token', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 2 };
    const doc2: DocInfo<TestDoc> = { ref: '456', tf: 3 };
    const token = 'foo';

    invertedIndex.addToken(token, doc1);
    invertedIndex.addToken(token, doc2);

    expect(invertedIndex.getTermFrequency('token', '123')).toEqual(0);
    expect(invertedIndex.getTermFrequency('token', '456')).toEqual(0);
  });

  it('test get term frequency from inverted index by non-exist docRef', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();

    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 2 };
    const doc2: DocInfo<TestDoc> = { ref: '456', tf: 3 };
    const token = 'foo';

    invertedIndex.addToken(token, doc1);
    invertedIndex.addToken(token, doc2);

    expect(invertedIndex.getTermFrequency(token, '12')).toEqual(0);
    expect(invertedIndex.getTermFrequency(token, '23')).toEqual(0);
    expect(invertedIndex.getTermFrequency(token, '45')).toEqual(0);
  });

  it('test get term frequency from inverted index by non-exist token and non-exist docRef', () => {
    const invertedIndex = new InvertedIndex<TestDoc>();
    const doc1: DocInfo<TestDoc> = { ref: '123', tf: 2 };
    const doc2: DocInfo<TestDoc> = { ref: '456', tf: 3 };
    const token = 'foo';

    invertedIndex.addToken(token, doc1);
    invertedIndex.addToken(token, doc2);

    expect(invertedIndex.getTermFrequency('token', '1')).toEqual(0);
    expect(invertedIndex.getTermFrequency('abc', '2')).toEqual(0);
    expect(invertedIndex.getTermFrequency('fo', '123')).toEqual(0);
  });
});
