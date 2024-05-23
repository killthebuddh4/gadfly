import { Machine } from "./Machine.js";
import { Phase } from "./Phase.js";

export type Transition = {
  machine: {
    read: () => Promise<Machine>;
  };
  from: {
    read: () => Promise<Phase>;
  };
  to: {
    read: () => Promise<Phase>;
  };
};
