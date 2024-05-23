import { Machine } from "./Machine.js";
import { Phase } from "./Phase.js";
import { Signal } from "./Signal.js";
import { Transition } from "./Transition.js";

export type Trace = {
  machine: {
    read: () => Promise<Machine>;
  };
  history: {
    read: () => Promise<
      Array<{
        phase: Phase;
        signal: Signal | null;
        transition: Transition | null;
      }>
    >;
  };
  signal: {
    write: (args: { signal: Signal }) => Promise<void>;
  };
};
