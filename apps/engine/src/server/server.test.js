describe("Gadfly", () => {
  it("Test", async function () {
    const response = await fetch("http://localhost:9999/test", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    console.log(json);
  });

  it.only("Create an actor", async function () {
    const response = await fetch("http://localhost:9999/actor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "summarizer",
        description: "You summarize things",
        inputs: ["The text to summarize"],
        outputs: ["The summary"],
        constraints: ["The summary should be no more than a few paragraphs"],
      }),
    });

    const json = await response.json();

    console.log(JSON.stringify(json, null, 2));
  });
});
