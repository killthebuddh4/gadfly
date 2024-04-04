import { Actor } from "../network/Actor.js";
import { Message } from "../network/Message.js";
import { Network } from "../network/Network.js";
import { openai } from "../../lib/openai/openai.js";

type LlmMessage = {
  role: "user" | "assistant";
  content: string;
};

export const createProtagonist = ({
  network,
  init,
}: {
  network: Network;
  init: Message;
}): Actor => {
  const id = "protagonist";

  const messages: Message[] = [init];

  const receive = async ({ message }: { message: Message }) => {
    messages.push(message);

    const llmMessages: LlmMessage[] = messages.map((message) => {
      const role = message.source === id ? "assistant" : "user";
      const content = message.text;

      return { role, content };
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: PROTAGONIST_PROMPT },
        ...llmMessages,
      ],
    });

    const text = response.choices[0].message.content;

    if (text === null) {
      throw new Error("No text in protagonist's chat completions response!");
    }

    network.publish({
      message: {
        id: response.id,
        text,
        source: id,
        destination: "antagonist",
      },
    });
  };

  return { id, network, messages, receive };
};

const PROTAGONIST_PROMPT = `
  You and a good friend of yours are engaged in a dialectical conversation in the style of
  a Platonic dialogue. You are playing the role of the protagonist. That is, you make positive
  assertions and defend them against your friend's questioning, analysis, and refutation. Your
  goal is to help your friend arrive at a more nuanced understanding of the topic at hand.
`
  .replace(/\n/g, " ")
  .replace(/\s+/g, " ")
  .trim();
