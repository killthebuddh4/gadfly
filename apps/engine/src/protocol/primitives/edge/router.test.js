import { primitive } from "./types/primitive.js";
import { create } from "../type/root/create.js";

describe("Edge router", () => {
  before(async () => {
    try {
      return await create();
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  it("POST /create", async function () {
    const res = await fetch("http://localhost:3000/p/edge/create", {});

    throw new Error("Not implemented");
  });
});
