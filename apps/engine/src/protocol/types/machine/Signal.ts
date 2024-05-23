import { Phase } from "./Phase.js";

export type Signal = {
  target: {
    read: () => Promise<Phase>;
  };
};
