import { Phase } from "./Phase.js";
import { Transition } from "./Transition.js";
import { Process } from "./Process.js";

export type Machine = {
  phases: {
    read: () => Promise<Phase>;
  };
  transitions: {
    read: () => Promise<Transition>;
  };
  traces: {
    read: () => Promise<Process[]>;
    write: (args: { process: Process }) => Promise<void>;
  };
};
