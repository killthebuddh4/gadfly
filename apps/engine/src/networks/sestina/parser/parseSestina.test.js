import { parseSestina } from "./parseSestina.js";
import { readFile } from "fs/promises";

describe("parseSestina", () => {
  it.only("should parse a sestina", async () => {
    const text = await readFile("./.data/sestina.txt", "utf-8");

    const result = parseSestina({ text });

    console.log(result);

    if (!result.ok) {
      throw new Error(result.reason);
    }
  });
});
