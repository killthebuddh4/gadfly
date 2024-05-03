describe("Gadfly", () => {
  it.only("POST /boot", async function () {
    const response = await fetch("http://localhost:9999/network", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: "I would like you to write me a sestina about the ocean.",
      }),
    });

    const json = await response.json();

    console.log(JSON.stringify(json, null, 2));
  });
});
