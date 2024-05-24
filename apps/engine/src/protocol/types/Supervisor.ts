import { Actor } from "./Actor.js";

export type Supervisor = {
  actor: {
    read: () => Promise<Actor>;
  };
};
