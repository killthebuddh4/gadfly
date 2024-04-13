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
    console.log(`Appending signal ${signal.id} to sequence ${address.address}`);

    signals.push(signal);

    for (const sequence of attached) {
      await sequence.append({ signal });
    }
  };

  const attach = async ({ sequence }: { sequence: Sequence }) => {
    const foundInNetwork = network.sequences.find(
      (networkSequence) =>
        networkSequence.address.address === sequence.address.address,
    );

    if (foundInNetwork === undefined) {
      throw new Error(`Sequence ${sequence.address.address} not in network`);
    }

    const found = attached.find(
      (attached) => attached.address.address === sequence.address.address,
    );

    if (found !== undefined) {
      throw new Error(`Sequence ${sequence.address.address} already attached`);
    }

    console.log(
      `Attaching sequence ${sequence.address.address} to sequence ${address.address}`,
    );

    attached.push(sequence);

    return {
      detach: async () => {
        const index = attached.findIndex(
          (attached) => attached.address.address === sequence.address.address,
        );

        if (index === -1) {
          throw new Error(`Sequence ${sequence.address.address} not attached`);
        }

        attached.splice(index, 1);
      },
    };
  };

  const sequence = {
    address,
    signals,
    attached,
    read,
    append,
    attach,
  };

  console.log(`Creating egress ${address.address}`);
  network.attach.sequence({ sequence });
  console.log(`Created egress ${address.address}`);

  return sequence;
};
