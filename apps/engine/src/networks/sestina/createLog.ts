import { Address } from "../../primitives/memory/Address.js";
import { Network } from "../../primitives/memory/Network.js";
import { Log } from "../../primitives/memory/Log.js";
import { Signal } from "../../primitives/memory/Signal.js";

export const createLog = async ({
  address,
  network,
  signals,
}: {
  address: Address;
  network: Network;
  signals: Signal[];
}): Promise<Log> => {
  const attached: Log[] = [];

  const read = async () => {
    return signals;
  };

  const append = async ({ signal }: { signal: Signal }) => {
    network.publish({ signal });

    signals.push(signal);

    for (const log of attached) {
      await log.append({ signal });
    }
  };

  const attach = async ({ log }: { log: Log }) => {
    const foundInNetwork = network.logs.find(
      (networkLog) => networkLog.address.address === log.address.address,
    );

    if (foundInNetwork === undefined) {
      throw new Error(`Log ${log.address.address} not in network`);
    }

    const found = attached.find(
      (attached) => attached.address.address === log.address.address,
    );

    if (found !== undefined) {
      throw new Error(`Log ${log.address.address} already attached`);
    }

    console.log(
      `Attaching log ${log.address.address} to log ${address.address}`,
    );

    attached.push(log);

    return {
      detach: async () => {
        const index = attached.findIndex(
          (attached) => attached.address.address === log.address.address,
        );

        if (index === -1) {
          throw new Error(`Log ${log.address.address} not attached`);
        }

        attached.splice(index, 1);
      },
    };
  };

  const log = {
    address,
    signals,
    attached,
    read,
    append,
    attach,
  };

  network.attach.log({ log });

  return log;
};
