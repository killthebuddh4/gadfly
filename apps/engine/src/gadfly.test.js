import { parseSestina } from "./networks/sestina/parser/parseSestina.js";

describe("Gadfly", () => {
  it.only("Sestina", async function () {
    this.timeout(60000);
    const problem = "Please write me a sestina about the ocean";

    const response = await fetch(
      `http://localhost:9999/sestina?input=${problem}`,
    );
    const json = await response.json();

    const parsed = parseSestina({ text: json.data.output });

    console.log(JSON.stringify(parsed, null, 2));
  });
});
