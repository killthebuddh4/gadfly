import { Sequence } from "../../primitives/memory/Sequence.js";
import { Signal } from "../../primitives/memory/Signal.js";

export const createIngress = async (): Promise<Sequence> => {
  const address = { address: "simple ingress" };

  const messages: Signal[] = [];

  const attached: Sequence[] = [];

  const read = async () => {
    return messages;
  };

  const append = async ({ message }: { message: Signal }) => {
    messages.push(message);

    for (const sequence of attached) {
      await sequence.append({ message });
    }
  };

  const attach = async ({ sequence }: { sequence: Sequence }) => {
    const found = attached.find(
      (attached) => attached.address === sequence.address,
    );

    if (found !== undefined) {
      throw new Error(`Sequence ${sequence.address.address} already attached`);
    }

    attached.push(sequence);

    return {
      detach: async () => {
        const index = attached.findIndex(
          (attached) => attached.address === sequence.address,
        );

        if (index === -1) {
          throw new Error(`Sequence ${sequence.address.address} not attached`);
        }

        attached.splice(index, 1);
      },
    };
  };

  return {
    address,
    messages,
    attached,
    read,
    append,
    attach,
  };
};
