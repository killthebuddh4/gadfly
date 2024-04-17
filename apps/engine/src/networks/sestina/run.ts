import { createNetwork } from "./createNetwork.js";
import { createIngress } from "./createIngress.js";
import { createEgress } from "./createEgress.js";
import { createSyntheticNeuron } from "./createSyntheticNeuron.js";
import { createRetryNeuron } from "./createRetryNeuron.js";
import { createAnalyticNeuron } from "./createAnalyticNeuron.js";
import { isSestina } from "./isSestina.js";

export const run = async ({ directions }: { directions: string }) => {
  const network = await createNetwork();
  const ingress = await createIngress({ network });
  const egress = await createEgress({ network });
  const synthetic = await createSyntheticNeuron({ network });
  // const synthetic = await createRetryNeuron({ network });
  const analytic = await createAnalyticNeuron({ network });

  synthetic.bind.dendrites({ axons: [ingress] });
  analytic.bind.dendrites({ axons: [synthetic.axon] });
  synthetic.bind.feedback({ axon: analytic.axon });
  synthetic.attach.axon({ sequence: egress });

  const activation = { total: 0 };

  setInterval(async () => {
    const output = await egress.read();

    if (output.length === activation.total) {
      return;
    } else {
      activation.total = output.length;
    }

    console.log(output[output.length - 1]?.text);

    isSestina(output[output.length - 1]?.text);
  }, 300);

  ingress.append({
    signal: {
      id: "1",
      sequence: ingress.address,
      stimuli: [],
      text: directions,
    },
  });
};
