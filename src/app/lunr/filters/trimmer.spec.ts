/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { trimmer } from './trimmer';

describe('trimmer', () => {

  it('latin characters', function() {
    const token = 'hello';
    expect(trimmer(token)).toEqual(token);
  });

  it('removing leading and trailing punctuation', function() {
    const fullStop = 'hello.',
      innerApostrophe = 'it\'s',
      trailingApostrophe = 'james\'',
      exclamationMark = 'stop!',
      comma = 'first,',
      empty = '',
      brackets = '[tag]',
      moreBrackets = '[[[tag]]]',
      combined1 = '[[!@#@!hello]]]}}}',
      combined2 = '~!@@@hello***()()()]]';

    expect(trimmer(fullStop)).toEqual('hello');
    expect(trimmer(innerApostrophe)).toEqual('it\'s');
    expect(trimmer(trailingApostrophe)).toEqual('james');
    expect(trimmer(exclamationMark)).toEqual('stop');
    expect(trimmer(comma)).toEqual('first');
    expect(trimmer(empty)).toEqual(undefined);
    expect(trimmer(brackets)).toEqual('tag');
    expect(trimmer(moreBrackets)).toEqual('tag');
    expect(trimmer(combined1)).toEqual('hello');
    expect(trimmer(combined2)).toEqual('hello');
  });

  it('test null input to trimmer', () => {
    expect(trimmer(null)).toEqual(undefined);
    expect(trimmer(undefined)).toEqual(undefined);
    expect(trimmer(void 0)).toEqual(undefined);
  });

});
