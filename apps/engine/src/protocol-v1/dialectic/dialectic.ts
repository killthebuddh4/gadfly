import { createAntagonist } from "./createAntagonist.js";
import { createArbiter } from "./createArbiter.js";
import { createProtagonist } from "./createProtagonist.js";
import { createNetwork } from "./createNetwork.js";
import { v4 as uuid } from "uuid";

export const dialectic = ({ assertion }: { assertion: string }) => {
  const init = {
    id: uuid(),
    source: "protagonist",
    destination: "protagonist",
    text: assertion,
  };

  const network = createNetwork();
  const protagonist = createProtagonist({ network, init });
  const antagonist = createAntagonist({ network });
  const arbiter = createArbiter({ network });

  network.join({ actor: protagonist });
  network.join({ actor: antagonist });
  network.join({ actor: arbiter });

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

  network.publish({ message: init });
};
