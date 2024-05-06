import { ParseResult } from "./ParseResult.js";

export const parsePattern = ({
  endWords,
}: {
  endWords: string[][];
}): ParseResult<boolean> => {
  const base: Record<string, number> = {};

  let stanza = endWords[0];

  if (stanza.length !== 6) {
    return {
      ok: false,
      reason: `The first stanza should have 6 line-ending words, got ${stanza.length}`,
    };
  }

  for (let i = 0; i < 6; i++) {
    base[stanza[i]] = i;
  }

  const pattern = [[1, 2, 3, 4, 5, 6]];

  for (let i = 1; i < 6; i++) {
    stanza = endWords[i];

    if (stanza.length !== 6) {
      return {
        ok: false,
        reason: `The ${i + 1}th stanza should have 6 line-ending words, got ${
          stanza.length
        }`,
      };
    }

    const indices = [];

    for (let j = 0; j < 6; j++) {
      const word = stanza[j];
      const index = base[word];

      if (index === undefined) {
        return {
          ok: false,
          reason: `The last word (${word}) in the ${j + 1}th line of the ${
            i + 1
          }th stanza is not an endword from the first stanza`,
        };
      } else {
        indices.push(index + 1);
      }
    }

    pattern.push(indices);
  }

  const expected = [
    [1, 2, 3, 4, 5, 6],
    [6, 1, 5, 2, 4, 3],
    [3, 6, 4, 1, 2, 5],
    [5, 3, 2, 6, 1, 4],
    [4, 5, 1, 3, 6, 2],
    [2, 4, 6, 5, 3, 1],
  ];

  for (let i = 0; i < 6; i++) {
    const p = pattern[i];
    const e = expected[i];

    for (let j = 0; j < 6; j++) {
      if (p[j] !== e[j]) {
        return {
          ok: false,
          reason: `The ${
            i + 1
          }th stanza has an invalid pattern, expected endword ${e}, got ${p}`,
        };
      }
    }
  }

  return {
    ok: true,
    data: true,
  };
};
