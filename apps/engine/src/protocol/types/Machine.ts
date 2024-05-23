import { Phase } from "./Phase.js";
import { Transition } from "./Transition.js";
import { Trace } from "./Trace.js";

export type Machine = {
  phases: {
    read: () => Promise<Phase>;
  };
  transitions: {
    read: () => Promise<Transition>;
  };
  traces: {
    read: () => Promise<Trace[]>;
    write: (args: { trace: Trace }) => Promise<void>;
  };
};
