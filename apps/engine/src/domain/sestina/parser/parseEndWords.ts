import { ParseResult } from "./ParseResult.js";

export const parseEndWords = ({
  stanzas,
  tripel,
}: {
  stanzas: string[][];
  tripel: string[];
}): ParseResult<{ endWords: string[][] }> => {
  const endWords: string[][] = [];

  for (let i = 0; i < 6; i++) {
    const stanza = stanzas[i];
    const lines = stanza.map((line) => line.split(" "));

    const endWordsForStanza: string[] = [];
    for (let j = 0; j < 6; j++) {
      const endWord = lines[j].pop();

      if (typeof endWord === "undefined") {
        return {
          ok: false,
          reason: `The ${j + 1}th line in the ${i + 1}th stanza had no words`,
        };
      }

      const cleanedEndWord = endWord.replace(/[^a-zA-Z]/g, "").toLowerCase();

      if (cleanedEndWord.length === 0) {
        return {
          ok: false,
          reason: `The ${j + 1}th line in the ${
            i + 1
          }th stanza had no valid characters`,
        };
      }

      endWordsForStanza.push(cleanedEndWord);
    }

    endWords.push(endWordsForStanza);
  }

  return {
    ok: true,
    data: {
      endWords,
    },
  };
};
