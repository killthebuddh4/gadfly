import { ParseResult } from "./ParseResult.js";

export const parseLines = ({
  text,
}: {
  text: string;
}): ParseResult<{ stanzas: string[][]; tripel: string[] }> => {
  const lines = text.split("\n");

  if (lines.length !== 45) {
    return {
      ok: false,
      reason: `Invalid number of lines, should be 45, got ${lines.length}`,
    };
  }

  for (let i = 6; i < lines.length - 3; i += 7) {
    if (lines[i].length !== 0) {
      return {
        ok: false,
        reason: `The ${i + 1}th line should be empty, got ${
          lines[i].length
        } characters`,
      };
    }
  }

  const withoutEmptyLines = lines.filter((l) => l.length > 0);

  if (withoutEmptyLines.length !== 39) {
    return {
      ok: false,
      reason: `Invalid number of lines, should be 39, got ${withoutEmptyLines.length}`,
    };
  }

  const stanzas: string[][] = [];

  for (let i = 0; i < 36; i += 6) {
    stanzas.push(withoutEmptyLines.slice(i, i + 6));
  }

  const tripel = withoutEmptyLines.slice(36);

  return {
    ok: true,
    data: {
      stanzas,
      tripel,
    },
  };
};
