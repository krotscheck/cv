/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

/**
 * trimmer is a pipeline function for trimming non word
 * characters from the begining and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 */
export function trimmer(token: string): string | undefined {
  if (!token) {
    return undefined;
  }

  return token
    .replace(/^\W+/, '')
    .replace(/\W+$/, '');
}
