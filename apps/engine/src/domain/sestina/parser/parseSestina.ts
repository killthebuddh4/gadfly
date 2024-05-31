import { parseLines } from "./parseLines.js";
import { parseEndWords } from "./parseEndWords.js";
import { parsePattern } from "./parsePattern.js";

export const parseSestina = ({ text }: { text: string }) => {
  const lines = parseLines({ text });

  if (!lines.ok) {
    return lines;
  }

  const endWords = parseEndWords(lines.data);

  if (!endWords.ok) {
    return endWords;
  }

  const pattern = parsePattern(endWords.data);

  if (!pattern.ok) {
    return pattern;
  }

  return {
    ok: true,
    data: lines.data,
  };
};
