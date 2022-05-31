/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { DocRef } from './document-store';

/**
 * Token Info format, using the document's ref and the token frequency of this token in the document.
 */
export interface DocInfo<T> {
  ref: DocRef<T>,

  tf: number
}

/**
 * Data node inside the index.
 */
type Node<T> = Map<string, Node<T>> & {
  docs: Map<DocRef<T>, DocInfo<T>>,
  df: number
};

/**
 * Create a new node.
 */
function newNode<T>(): Node<T> {
  const node = <Node<T>> (new Map<string, Node<T>>());
  node.docs = new Map<DocRef<T>, DocInfo<T>>();
  node.df = 0;
  return node;
}

/**
 * InvertedIndex is used for efficiently storing and lookup of documents that contain a given token.
 */
export class InvertedIndex<T> {

  /**
   * Root reference for the index on this token.
   */
  private root: Node<T> = newNode<T>();

  /**
   * Adds a {token: tokenInfo} pair to the inverted index.
   * If the token already exist, then update the tokenInfo.
   *
   * tokenInfo format: { ref: 1, tf: 2}
   * tokenInfor should contains the document's ref and the tf(token frequency) of that token in
   * the document.
   *
   * By default this function starts at the root of the current inverted index, however
   * it can start at any node of the inverted index if required.
   */
  public addToken(token: string, tokenInfo: DocInfo<T>, root: Node<T> = this.root) {
    let idx = 0;
    while (idx <= token.length - 1) {
      let key = token[idx];
      if (!root.has(key)) {
        root.set(key, newNode());
      }
      idx += 1;
      root = root.get(key);
    }

    if (!root.docs.has(tokenInfo.ref)) {
      // If it doesn't exist, add a new one.
      root.docs.set(tokenInfo.ref, tokenInfo);
      root.df += 1;
    } else {
      // if this doc already exist, then update tokenInfo
      root.docs.get(tokenInfo.ref).tf = tokenInfo.tf;
    }
  };

  /**
   * Checks whether a token is in this InvertedIndex.
   */
  public hasToken(token: string): boolean {
    if (!token) {
      return false;
    }

    let node = this.root;
    for (let i = 0; i < token.length; i++) {
      const key = token.charAt(i);
      if (!node.has(key)) {
        return false;
      }
      node = node.get(key);
    }

    return true;
  };

  /**
   * Retrieve a node from the inverted index for a given token.
   * If token not found in this InvertedIndex, return null.
   */
  public getNode(token: string): Node<T> | undefined {
    if (!token) {
      return null;
    }

    let node = this.root;
    for (let i = 0; i < token.length; i++) {
      const key = token.charAt(i);
      if (!node.has(key)) {
        return undefined;
      }
      node = node.get(key);
    }
    return node;
  }

  /**
   * Retrieve the documents of a given token.
   * If token not found, return {}.
   */
  public getDocs(token: string): Map<DocRef<T>, DocInfo<T>> {
    const node = this.getNode(token);
    if (node == null) {
      return new Map<DocRef<T>, DocInfo<T>>();
    }
    return node.docs;
  }

  /**
   * Retrieve term frequency of given token in given docRef.
   * If token or docRef not found, return 0.
   */
  public getTermFrequency(token: string, docRef: DocRef<T>): number {
    const doc = this.getDocs(token).get(docRef);
    if (doc === undefined) {
      return 0;
    }
    return doc.tf;
  }

  /**
   * Retrieve the document frequency of given token.
   * If token not found, return 0.
   */
  public getDocFreq(token: string): number {
    const node = this.getNode(token);
    if (node == undefined) {
      return 0;
    }
    return node.df;
  }

  /**
   * Remove the document identified by document's ref from the token in the inverted index.
   */
  public removeToken(token: string, docRef: DocRef<T>) {
    let node = this.getNode(token);
    if (node == undefined) {
      return;
    }

    if (node.docs.has(docRef)) {
      node.docs.delete(docRef);
      node.df -= 1;
    }
  }

  /**
   * Find all the possible suffixes of given token using tokens currently
   * in the inverted index. If token not found, return empty Array.
   */
  public expandToken(token: string, root?: Node<T>): string[] {
    let memo: string[] = [];
    if (!root) {
      root = this.getNode(token);
      if (root == undefined) {
        return memo;
      }
    }

    if (root.df > 0) {
      memo.push(token);
    }

    for (let key of root.keys()) {
      memo.push(...this.expandToken(token + key, root.get(key)));
    }

    return memo;
  }
}
