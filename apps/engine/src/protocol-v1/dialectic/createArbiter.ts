import { Actor } from "../network/Actor.js";
import { Message } from "../network/Message.js";
import { Network } from "../network/Network.js";
import { openai } from "../../lib/openai/openai.js";
import { logger } from "../../lib/openai/logger.js";

type LlmMessage = {
  role: "user" | "assistant";
  name?: string;
  content: string;
};

export const createArbiter = ({ network }: { network: Network }): Actor => {
  const id = "arbiter";

  const messages: Message[] = [];

  const receive = async ({ message }: { message: Message }) => {
    messages.push(message);

    const llmMessages: LlmMessage[] = messages.map((message) => {
      const role = message.source === id ? "assistant" : "user";
      const name = (() => {
        switch (message.source) {
          case "protagonist":
            return "protagonist";
          case "antagonist":
            return "antagonist";
          case id:
            return undefined;
          default:
            throw new Error(`Unknown actor: ${message.source}`);
        }
      })();
      const content = message.text;

      return { role, name, content };
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: ARBITER_PROMPT }, ...llmMessages],
    });

    const text = response.choices[0].message.content;

    if (text === null) {
      throw new Error("No text in arbiter's chat completions response!");
    }

    logger(
      "arbiter",
      (() => {
        try {
          return JSON.parse(text);
        } catch {
          return text;
        }
      })(),
    );

    network.forward({ message });
  };

  return { id, network, messages, receive };
};

const ARBITER_PROMPT = `
  You and two of your good friends are engaged in a dialectical conversation in the style of
  a Platonic dialogue. One friend is playing the role of the protagonist and the other
  is playing the role of the antagonist. The protagonist makes positive assertions and
  defends them against the antagonist's questioning, analysis, and refutation. Your goal
  is to judge the quality of the arguments made by each friend in order to help them arrive
  at a more nuanced understanding of the topic at hand.
`
  .replace(/\n/g, " ")
  .replace(/\s+/g, " ")
  .trim();
