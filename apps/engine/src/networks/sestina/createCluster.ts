import { createNetwork } from "./createNetwork.js";
import { createSyntheticActor } from "./createSyntheticActor.js";
import { createLog } from "./createLog.js";
import { v4 as uuid } from "uuid";
import { Signal } from "../../primitives/memory/Signal.js";

export const createCluster = async () => {
  const network = await createNetwork();
  const ingress = await createLog({
    network,
    address: { address: "ingress" },
    signals: [],
  });
  const synthetic = await createSyntheticActor({ network });

  return async ({ input }: { input: string }) => {
    const signal: Signal = {
      id: uuid(),
      log: ingress.address,
      stimuli: [],
      text: input,
    };

    await ingress.append({ signal });

    return synthetic.call({ inputs: [signal] });
  };
};
