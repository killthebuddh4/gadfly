import { Network } from "../../primitives/memory/Network.js";
import { Memory } from "../../primitives/memory/Memory.js";
import { Signal } from "../../primitives/memory/Signal.js";
import { Handler } from "../../primitives/memory/Handler.js";
import { v4 as uuid } from "uuid";
import { Message } from "../../primitives/memory/Message.js";

export const createMemory = async ({
  address,
  network,
}: {
  address: string;
  network: Network;
}): Promise<Memory> => {
  const history: Message[] = [];

  const listeners: Array<{ id: string; handler: Handler }> = [];

  const write = async ({ message }: { message: Message }) => {
    history.push(message);

    for (const listener of listeners) {
      await listener.handler({ message });
    }
  };

  const listen = async ({ memory }: { memory: Memory }) => {
    const id = uuid();

    const handler: Handler = async ({ message }) => {
      network.publish({
        message: {
          id: message.id,
          trace: [...message.trace, memory.address],
          destination: memory.address,
          signal: message.signal,
        },
      });
    };

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

  return {
    address: { address },
    history,
    write,
    listen,
  };
};
