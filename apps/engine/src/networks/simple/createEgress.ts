import { Network } from "../../primitives/memory/Network.js";
import { Sequence } from "../../primitives/memory/Sequence.js";
import { Signal } from "../../primitives/memory/Signal.js";

export const createEgress = async ({
  network,
}: {
  network: Network;
}): Promise<Sequence> => {
  const address = { address: "simple egress" };

  const signals: Signal[] = [];

  const attached: Sequence[] = [];

  const read = async () => {
    return signals;
  };

  const append = async ({ signal }: { signal: Signal }) => {
    signals.push(signal);

    for (const sequence of attached) {
      await sequence.append({ signal });
    }
  };

  const attach = async ({ sequence }: { sequence: Sequence }) => {
    const foundInNetwork = network.sequences.find(
      (networkSequence) => networkSequence.address === sequence.address,
    );

    if (foundInNetwork === undefined) {
      throw new Error(`Sequence ${sequence.address.address} not in network`);
    }

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
    signals,
    attached,
    read,
    append,
    attach,
  };
};
