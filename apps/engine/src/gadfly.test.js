describe("Gadfly", () => {
  it("Birthday request", async function () {
    this.timeout(60000);
    const problem = "I want to throw a third birthday for my son.";
    const response = await fetch(
      `http://localhost:9999/gadfly?problem=${problem}`,
    );
    const json = await response.json();
    console.log(JSON.stringify(json, null, 2));
  });

  it("Thanks request", async function () {
    this.timeout(60000);
    const problem = "I want send each of my friends a thank you note.";
    const response = await fetch(
      `http://localhost:9999/gadfly?problem=${problem}`,
    );
    const json = await response.json();
    console.log(JSON.stringify(json, null, 2));
  });

  it.only("Dialectic", async function () {
    this.timeout(60000);
    const response = await fetch(`http://localhost:9999/dialectic`);
    const json = await response.json();
    console.log(JSON.stringify(json, null, 2));
  });
});