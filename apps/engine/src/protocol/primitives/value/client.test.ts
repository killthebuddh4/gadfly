import { client } from "./client.js";

describe("Value Client", () => {
  it.only("Can create a value", async () => {
    const response = await client.create({
      url: "http://localhost:9999",
      body: {
        value: "Test",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to create value");
    }

    return true;
  });
});
