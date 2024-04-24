import { Actor } from "../actor/Actor.js";

export type Network = {
  actors: () => Promise<Actor>;
};
