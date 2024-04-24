import { buildNetwork } from "./buildNetwork.js";

describe("buildNetwork", () => {
  it.only("should build a network from a list of primitives", async function () {
    this.timeout(60000);

    await buildNetwork();
  });
});
