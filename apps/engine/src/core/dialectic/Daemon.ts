import { Actor } from "./Actor.js";

export type Daemon = {
  actor: () => Promise<Actor>;
};
