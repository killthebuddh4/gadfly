import { createAntagonist } from "./createAntagonist.js";
import { createArbiter } from "./createArbiter.js";
import { createProtagonist } from "./createProtagonist.js";
import { createNetwork } from "./createNetwork.js";

export const dialectic = ({ assertion }: { assertion: string }) => {
  const network = createNetwork();
  const protagonist = createProtagonist({ network });
  const antagonist = createAntagonist({ network });
  const arbiter = createArbiter({ network });

  network.supervise({
    supervisor: protagonist,
    selector: async ({ message }) => {
      if (message.source === arbiter.id) {
        return true;
      } else {
        return false;
      }
    },
  });
};
