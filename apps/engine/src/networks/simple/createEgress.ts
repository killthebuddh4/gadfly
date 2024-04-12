import { Memory } from "../../primitives/substrate/Neuron.js";
import { Handler } from "../../primitives/substrate/Handler.js";
import { Neuron } from "../../primitives/neuron/Neuron.js";
import { v4 as uuid } from "uuid";
import { openai } from "../../lib/openai/openai.js";
import { Network } from "../../primitives/substrate/Network.js";
import { Message } from "../../primitives/substrate/Message.js";

export const createSestinaNeuron = async ({
  network,
  axon,
}: {
  axon: Memory;
  network: Network;
}): Promise<Memory> => {
  const address = { address: "sestina neuron" };

  const history: Message[] = [];

  const listeners: Array<{ id: string; handler: Handler }> = [];

  const listen = async ({ handler }: { handler: Handler }) => {
    const id = uuid();

    listeners.push({ id, handler });

    return {
      ignore: async () => {
        const found = listeners.find((l) => l.id === id);

        if (!found) {
          throw new Error(`Listener for id: ${id} not found`);
        }

        listeners.splice(listeners.indexOf(found), 1);
      },
    };
  };

  const write = async ({ message }: { message: Message }) => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Please respond with a sestina.",
        },
      ],
    });

    const message = {
      id: uuid(),
      trace: [address],
      destination: address,
    };

    history.push(message);
  };

  axon.listen({ handler });

  // const oracle: Oracle = async ({ signal }) => {

  // };

  return {
    memory,
    oracle,
    listeners,
    listen,
  };
};
