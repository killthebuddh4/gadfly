describe("Gadfly", () => {
  it("Create a summarizer", async function () {
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

  const text = `
At some point in history, somewhere between spearing mammoths and mining Bitcoin, man became Man. We learned Philosophy and found Religion. We constructed a world of names, essentia, Truth, and God. I want to share with you my attitude towards living in relation with these ideas.

First, I want you to understand that I have no taste for Philosophy nor Religion but that I also feel their void, like gravity, right down the middle of who I am. Like an unfinished story right at the center, or like amnesia, like there's something I was doing but forgot.

It may be misleading for me to say there's Philosophy and Religion because, for me personally, I feel there is just Religion. That said, there is no Religion, there is only raw existence. There is __religion__, the feeling of it, the thing I forgot, the thing I was in the middle of and nothing more. 

A few decades ago we learned how to reify Idea, we discovered Meme, or Idea as Virus. Today Meme runs riot through all aspects of the human condition, the Sun blots out the sun and emaciates everything. Sometimes I feel hopeless. Where is the pulse, the animal immediacy? I'm looking for the burning sun but am offered the Sun Which Radiates Nothing. Sometimes I feel hopeless.

Sometimes I feel hopeless, but I always remember there's a way out. For a short time, a few millenia, we lived happily beneath Philosophy and Religion. In a world of sun and Sun, we toiled and worshipped and for the most part became more bold and more beautiful. I think we can still live this way, we can feel the tension of a hard day's labor under the eye of Idea. 
`;

  it("Call the summarizer", async function () {
    const id = "";
    const response = await fetch(`http://localhost:9999/actor/${id}/call`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: [text] }),
    });

    const json = await response.json();

    console.log(JSON.stringify(json, null, 2));
  });
});
