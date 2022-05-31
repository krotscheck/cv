/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { DocumentStore } from './document-store';
import { TestDoc } from './test/test-doc';


describe(DocumentStore.name, () => {

  it('adding document tokens to the document store', () => {
    const docStore = new DocumentStore('id');
    const doc1 = { id: '1', title: 'eggs bread' };

    docStore.addDoc(doc1);
    expect(docStore.length).toEqual(1);
    expect(docStore.getDoc('1')).toEqual(doc1);
  });

  it('add doc test with storing the doc', () => {
    const docStore = new DocumentStore('id');
    const doc1 = { id: '1', title: 'eggs bread' };
    const doc2 = { id: '2', title: 'hello world' };

    docStore.addDoc(doc1);
    docStore.addDoc(doc2);
    expect(docStore.length).toEqual(2);
    expect(docStore.getDoc('1')).toEqual(doc1);
    expect(docStore.getDoc('2')).toEqual(doc2);
  });

  it('get non-exist doc test with storing the doc', () => {
    const docStore = new DocumentStore('id');
    const doc1 = { id: '1', title: 'eggs bread' };
    const doc2 = { id: '2', title: 'hello world' };

    docStore.addDoc(doc1);
    docStore.addDoc(doc2);
    expect(docStore.length).toEqual(2);
    expect(docStore.getDoc('6')).toBeUndefined();
    expect(docStore.getDoc('2')).toEqual(doc2);
  });

  it('remove doc test with storing the doc', () => {
    const docStore = new DocumentStore('id');
    const doc1 = { id: '1', title: 'eggs bread' };
    const doc2 = { id: '2', title: 'hello world' };

    docStore.addDoc(doc1);
    docStore.addDoc(doc2);
    docStore.removeDoc('1');
    expect(docStore.length).toEqual(1);
    expect(docStore.getDoc('2')).toEqual(doc2);
    expect(docStore.getDoc('1')).toBeUndefined();
  });

  it('remove non-exist doc test with storing the doc', () => {
    const docStore = new DocumentStore('id');
    const doc1 = { id: '1', title: 'eggs bread' };
    const doc2 = { id: '2', title: 'hello world' };

    docStore.addDoc(doc1);
    docStore.addDoc(doc2);
    docStore.removeDoc('8');
    expect(docStore.length).toEqual(2);
    expect(docStore.getDoc('2')).toEqual(doc2);
    expect(docStore.getDoc('1')).toEqual(doc1);
  });

  it('getting the number of docs in the document store', () => {
    const docStore = new DocumentStore<TestDoc>('id');

    expect(docStore.length).toEqual(0);
    docStore.addDoc({ id: '1', title: 'eggs bread' });
    expect(docStore.length).toEqual(1);
  });

  it('get a doc in the document store', () => {
    const docStore = new DocumentStore<TestDoc>('id');

    expect(docStore.length).toEqual(0);
    docStore.addDoc({ id: '1', title: 'eggs bread' });
    expect(docStore.getDoc('1')).toEqual({ id: '1', title: 'eggs bread' });
  });

  it('get a doc with multiple fields in the document store', () => {
    const docStore = new DocumentStore<TestDoc>('id');

    expect(docStore.length).toEqual(0);
    docStore.addDoc({ id: '1', title: 'eggs bread' });
    docStore.addDoc({ id: '2', title: 'boo bar' });
    docStore.addDoc({ id: '3', title: 'oracle', body: 'oracle is a great company' });
    expect(docStore.getDoc('3')).toEqual({ id: '3', title: 'oracle', body: 'oracle is a great company' });
    expect(docStore.length).toEqual(3);
  });

  it('get a non-exist doc in the document store', () => {
    const docStore = new DocumentStore<TestDoc>('id');

    expect(docStore.length).toEqual(0);
    docStore.addDoc({ id: '1', title: 'eggs bread' });
    docStore.addDoc({ id: '2', title: 'boo bar' });
    docStore.addDoc({ id: '3', title: 'oracle', body: 'oracle is a great company' });
    expect(docStore.getDoc('4')).toBeUndefined();
    expect(docStore.getDoc('0')).toBeUndefined();
    expect(docStore.length).toEqual(3);
  });

  it('checking whether the store contains a key', () => {
    const store = new DocumentStore<TestDoc>('id');

    expect(!store.hasDoc('foo')).toBeTrue();
    store.addDoc({ id: 'foo', title: 'eggs bread' });
    expect(store.hasDoc('foo')).toBeTrue();
  });

  it('removing an doc from the store', () => {
    const store = new DocumentStore<TestDoc>('id');

    store.addDoc({ id: 'foo', title: 'eggs bread' });
    expect(store.hasDoc('foo')).toBeTrue();
    expect(store.length).toEqual(1);
    store.removeDoc('foo');
    expect(!store.hasDoc('foo')).toBeTrue();
    expect(store.length).toEqual(0);
  });

  it('removing a non-exist doc from the store', () => {
    const store = new DocumentStore<TestDoc>('id');

    store.addDoc({ id: 'foo', title: 'eggs bread' });
    expect(store.hasDoc('foo')).toBeTrue();
    expect(store.length).toEqual(1);
    store.removeDoc('bar');
    expect(store.hasDoc('foo')).toBeTrue();
    expect(store.length).toEqual(1);
  });

  it('test add field length with non-exist docRef', () => {
    const store = new DocumentStore<TestDoc>('id');

    store.addDoc({ id: 'foo', title: 'eggs bread' });
    store.setFieldLength('bar', 'title', 2);
    expect(store.length).toEqual(1);
  });

  it('test add field length with non-exist docRef, non-exist title', () => {
    const store = new DocumentStore<TestDoc>('id');

    store.addDoc({ id: 'foo', title: 'eggs bread' });
    store.setFieldLength('bar', 'title', 2);
    expect(store.length).toEqual(1);
  });

  it('test add field length', () => {
    const store = new DocumentStore<TestDoc>('id');

    store.addDoc({ id: 'foo', title: 'eggs bread' });
    store.setFieldLength('foo', 'title', 2);
    expect(store.getFieldLength('foo', 'title')).toEqual(2);
  });

  it('test add field length with multiply fields', () => {
    const store = new DocumentStore<TestDoc>('id');

    store.addDoc({ id: 'foo', title: 'eggs bread' });
    store.setFieldLength('foo', 'title', 2);
    store.setFieldLength('foo', 'body', 10);
    expect(store.getFieldLength('foo', 'title')).toEqual(2);
    expect(store.getFieldLength('foo', 'body')).toEqual(10);
  });

  it('test add field length with non-exist field', () => {
    const store = new DocumentStore<TestDoc>('id');

    store.addDoc({ id: 'foo', title: 'eggs bread' });
    store.setFieldLength('foo', 'body', 10);
    expect(store.getFieldLength('foo', 'body')).toEqual(10);
  });

  it('test delete doc about field length', () => {
    const store = new DocumentStore<TestDoc>('id');

    store.addDoc({ id: 'foo', title: 'eggs bread' });
    store.setFieldLength('foo', 'title', 2);
    store.setFieldLength('foo', 'body', 10);
    store.removeDoc('foo');
    expect(store.getFieldLength('foo', 'title')).toEqual(0);
    expect(store.getFieldLength('foo', 'body')).toEqual(0);
  });
});
