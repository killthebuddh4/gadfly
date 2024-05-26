import { Actor } from "./Actor.js";

export type Hypervisor = {
  actor: {
    read: () => Promise<Actor>;
  };
};
