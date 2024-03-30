import { gadfly } from "./gadfly.js";

describe("Gadfly", () => {
  it("Doesn't throw", function () {
    this.timeout(60000);
    gadfly();
  });
});
