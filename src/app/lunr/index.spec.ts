/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { trimmer } from './filters/trimmer';
import { Index } from './index';
import { TestDoc } from './test/test-doc';

describe(Index.name, () => {
  let idx: Index<TestDoc> = new Index<TestDoc>('id');

  beforeEach(() => {
    idx = new Index<TestDoc>('id', null, trimmer);
  });

  it('defining what fields to index', () => {
    idx.addField('body');
    expect(idx.getFields()).toEqual(['id', 'body']);
  });

  it('default reference should be id', () => {
    expect(idx.idField).toEqual('id');
  });

  it('adding a document to the index', () => {
    const doc: TestDoc = { id: '1', body: 'this is a test' };

    idx.addField('body');
    idx.addDoc(doc);

    expect(idx.documentStore.length).toEqual(1);
    expect(!!idx.documentStore.getDoc('1')).toBeTrue();
  });

  it('adding a document with an empty field', () => {
    const doc: TestDoc = { id: '1', body: 'this is a test', title: '' };

    idx.addField('title');
    idx.addField('body');

    idx.addDoc(doc);
    expect(idx.getFieldIndex('body').getDocFreq('test')).toEqual(1);
    expect(idx.getFieldIndex('body').getDocs('test').get('1').tf).toEqual(1);
  });

  it('triggering add events', () => {
    const doc: TestDoc = { id: '1', body: 'this is a test' };
    let callbackCalled = false;

    idx.addEventListener('add', () => {
      callbackCalled = true;
    });

    idx.addField('body');
    idx.addDoc(doc);

    expect(callbackCalled).toBeTrue();
  });

  it('silencing add events', () => {
    const doc: TestDoc = { id: '1', body: 'this is a test' };
    let callbackCalled = false;
    const callbackArgs = [];

    idx.addEventListener('add', () => {
      callbackCalled = true;
    });

    idx.addField('body');
    idx.addDoc(doc, false);

    expect(!callbackCalled).toBeTrue();
  });

  it('removing a document from the index', () => {
    const doc: TestDoc = { id: '1', body: 'this is a test' };

    idx.addField('body');
    expect(idx.documentStore.length).toEqual(0);

    idx.addDoc(doc);
    expect(idx.documentStore.length).toEqual(1);

    idx.removeDoc(doc);
    expect(idx.documentStore.length).toEqual(0);

    expect(idx.getFieldIndex('body').hasToken('this')).toEqual(true);
    expect(idx.getFieldIndex('body').hasToken('test')).toEqual(true);
    expect(idx.getFieldIndex('body').getNode('this').df).toEqual(0);
    expect(idx.getFieldIndex('body').getNode('test').docs.size).toEqual(0);
  });

  it('removing a document from the index with more than one documents', () => {
    const doc1: TestDoc = { id: '1', body: 'test with an orange' };
    const doc2: TestDoc = { id: '2', body: 'test with an apple' };

    idx.addField('body');
    expect(idx.documentStore.length).toEqual(0);

    idx.addDoc(doc1);
    expect(idx.documentStore.length).toEqual(1);

    idx.addDoc(doc2);
    expect(idx.documentStore.length).toEqual(2);

    const docs = idx.getFieldIndex('body').getNode('test').docs;
    expect(docs.get('1')).toEqual({ ref: '1', tf: 1 });
    expect(docs.get('2')).toEqual({ ref: '2', tf: 1 });
    expect(idx.getFieldIndex('body').hasToken('test')).toEqual(true);
    expect(idx.getFieldIndex('body').hasToken('orange')).toEqual(true);
    expect(idx.getFieldIndex('body').hasToken('apple')).toEqual(true);

    idx.removeDoc(doc1);
    expect(idx.documentStore.length).toEqual(1);

    expect(idx.getFieldIndex('body').hasToken('test')).toEqual(true);
    expect(idx.getFieldIndex('body').getNode('test').df).toEqual(1);
    expect(idx.getFieldIndex('body').getNode('orange').df).toEqual(0);
    expect(idx.getFieldIndex('body').getNode('apple').df).toEqual(1);

    // Encountered keys are kept...
    expect(idx.getFieldIndex('body').hasToken('orange')).toEqual(true);
    expect(idx.getFieldIndex('body').hasToken('apple')).toEqual(true);

    // But they end up empty.
    expect(idx.getFieldIndex('body').getNode('apple').docs.get('2')).toEqual({ ref: '2', tf: 1 });
    expect(idx.getFieldIndex('body').getNode('orange').docs.get('2')).toBeUndefined();
  });

  it('triggering remove events', () => {
    const doc: TestDoc = { id: '1', body: 'this is a test' };
    let callbackCalled = false;

    idx.addEventListener('remove', () => {
      callbackCalled = true;
    });

    idx.addField('body');
    idx.addDoc(doc);
    idx.removeDoc(doc);

    expect(callbackCalled).toBeTrue();
  });

  it('silencing remove events', () => {
    const doc: TestDoc = { id: '1', body: 'this is a test' };
    let callbackCalled = false;

    idx.addEventListener('remove', () => {
      callbackCalled = true;
    });

    idx.addField('body');
    idx.addDoc(doc);
    idx.removeDoc(doc, false);

    expect(!callbackCalled).toBeTrue();
  });

  it('removing a non-existent document from the index', () => {
    const doc1 = { id: '1', body: 'this is a test' };
    const doc2 = { id: '2', body: 'i dont exist' };
    let callbackCalled = false;

    idx.addEventListener('remove', () => {
      callbackCalled = true;
    });

    idx.addField('body');
    expect(idx.documentStore.length).toEqual(0);

    idx.addDoc(doc1);
    expect(idx.documentStore.length).toEqual(1);

    idx.removeDoc(doc2);
    expect(idx.documentStore.length).toEqual(1);

    expect(!callbackCalled).toBeTrue();
  });

  it('updating a document', () => {
    const doc1 = { id: '1', body: 'foo' };

    idx.addField('body');
    idx.addDoc(doc1);
    expect(idx.documentStore.length).toEqual(1);
    expect(idx.getFieldIndex('body').hasToken('foo')).toBeTrue();

    doc1.body = 'bar';
    idx.updateDoc(doc1);

    expect(idx.documentStore.length).toEqual(1);
    expect(idx.getFieldIndex('body').hasToken('bar')).toBeTrue();
  });

  it('search a document', () => {
    const doc = { id: '1', body: 'foo' };

    idx.addField('body');
    idx.addDoc(doc);

    const firstFooResult = idx.search('foo');
    expect(firstFooResult.length).toEqual(1);

    doc.body = 'bar';
    idx.updateDoc(doc);

    const barResult = idx.search('bar');
    expect(barResult.length).toEqual(1);

    const secondFooResult = idx.search('foo');
    expect(secondFooResult.length).toEqual(0);
  });

  it('emitting update events', () => {
    const doc = { id: '1', body: 'foo' };
    let addCallbackCalled = false;
    let removeCallbackCalled = false;
    let updateCallbackCalled = false;

    idx.addField('body');
    idx.addDoc(doc);
    expect(idx.documentStore.length).toEqual(1);
    expect(idx.getFieldIndex('body').hasToken('foo')).toBeTrue();

    idx.addEventListener('update', () => updateCallbackCalled = true);
    idx.addEventListener('add', () => addCallbackCalled = true);
    idx.addEventListener('remove', () => removeCallbackCalled = true);

    doc.body = 'bar';
    idx.updateDoc(doc);

    expect(updateCallbackCalled).toBeTrue();
    expect(!addCallbackCalled).toBeTrue();
    expect(!removeCallbackCalled).toBeTrue();
  });

  it('silencing update events', () => {
    const doc = { id: '1', body: 'foo' };
    let callbackCalled = false;

    idx.addField('body');
    idx.addDoc(doc);
    expect(idx.documentStore.length).toEqual(1);
    expect(idx.getFieldIndex('body').hasToken('foo')).toBeTrue();

    idx.addEventListener('update', () => {
      callbackCalled = true;
    });

    doc.body = 'bar';
    idx.updateDoc(doc, false);

    expect(callbackCalled).toBeFalse();
  });

  it('idf cache with reserved words', () => {
    const idx = new Index<TestDoc>('id');
    idx.addField('body');

    const troublesomeTokens = [
      'constructor',
      '__proto__',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ];

    for (const token of troublesomeTokens) {
      const v = idx.idf(token, 'body');
      expect(typeof v).toEqual('number');
    }
  });

});
