/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

/**
 * Default string seperator.
 */

const defaultSeperator: RegExp = /[\s\-]+/;

/**
 * A class for splitting a string into tokens. Currently English is supported as default.
 * Uses `public seperator` to split strings, you could change
 * the value of this property to set how you want strings are split into tokens.
 * IMPORTANT: use public seperator carefully, if you are not familiar with
 * text process, then you'd better not change it.
 */
export class Tokenizer {

  /**
   * The separator used to split a string into tokens. Override this property to change the behaviour of
   * `tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
   */
  constructor(private readonly separator: RegExp = defaultSeperator) {
  }

  /**
   * Tokenize a string into its components.
   */
  public tokenize(...str: any[]): string[] {
    if (!str) {
      return [];
    }

    return str
      .map((token) => this.toString(token))
      // Filter out empty values
      .filter((token) => !!token)
      // Stringify and lowercase the value
      .map((token) => token.trim().toLowerCase())
      // Concat all results.
      .reduce((coll, token) => [
        ...coll,
        ...token.split(this.separator)
      ], []);
  }

  /**
   * Convert an object to string.
   *
   * In the case of `null` and `undefined` the function returns
   * an empty string, in all other cases the result of calling
   * `toString` on the passed object is returned.
   */
  private toString(obj: any): string {
    if (obj === void 0 || obj === null) {
      return '';
    }

    return obj.toString();
  }
}
