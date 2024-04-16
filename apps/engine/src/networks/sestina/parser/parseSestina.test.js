import { parseSestina } from "./parseSestina.js";
import { readFile } from "fs/promises";

describe("parseSestina", () => {
  it("parses bishop-sestina.txt", async () => {
    const text = await readFile("./data/bishop-sestina.txt", "utf-8");

    const result = parseSestina({ text });

    if (!result.ok) {
      throw new Error(result.reason);
    }
  });

  it("fails to parse pound-sestina-altaforte.txt", async () => {
    const text = await readFile("./data/pound-sestina-altaforte.txt", "utf-8");

    const result = parseSestina({ text });

    if (result.ok) {
      throw new Error(result.reason);
    }
  });
});
