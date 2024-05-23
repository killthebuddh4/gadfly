import { Machine } from "./Machine.js";
import { Transition } from "./Transition.js";

export type Phase = {
  machine: {
    read: () => Promise<Machine>;
  };
  upstream: {
    read: () => Promise<Transition[]>;
  };
  downstream: {
    read: () => Promise<Transition[]>;
  };
};
