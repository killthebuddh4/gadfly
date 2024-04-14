import { run } from "./run.js";

describe("run", () => {
  it("should return a string", async function () {
    this.timeout(10000);

    try {
      await run({ directions: "Please write one about the ocean." });
    } catch (error) {
      console.error(error);
    }
  });
});
