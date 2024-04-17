import { createNetwork } from "./createNetwork.js";
import { createIngress } from "./createIngress.js";
import { createEgress } from "./createEgress.js";
import { createSyntheticNeuron } from "./createSyntheticNeuron.js";
import { createAnalyticNeuron } from "./createAnalyticNeuron.js";
import { getMostRecentSignal } from "../../primitives/memory/neuron/getMostRecentSignal.js";
import { Signal } from "../../primitives/memory/Signal.js";
import { v4 as uuid } from "uuid";

export const createCluster = async () => {
  const network = await createNetwork();
  const ingress = await createIngress({ network });
  const egress = await createEgress({ network });
  const synthetic = await createSyntheticNeuron({ network });
  const analytic = await createAnalyticNeuron({ network });

  synthetic.bind.dendrites({ axons: [ingress] });
  synthetic.bind.feedback({ axon: analytic.axon });
  analytic.bind.dendrites({ axons: [synthetic.axon] });
  synthetic.attach.axon({ sequence: egress });

  return async ({ input }: { input: string }) => {
    let output: Signal | null = null;

    console.log("INPUT TO CLUSTER IS: ", input);
    ingress.append({
      signal: {
        id: uuid(),
        sequence: ingress.address,
        stimuli: [],
        text: input,
      },
    });

    return new Promise<string>((resolve) => {
      const interval = setInterval(async () => {
        const newOutput = getMostRecentSignal({ sequence: egress });

        if (newOutput === null) {
          return;
        }

        if (output === null) {
          output = newOutput;
        } else {
          if (output.id === newOutput.id) {
            return;
          }
        }

        clearInterval(interval);

        resolve(newOutput.text);
      }, 3000);
    });
  };
};
