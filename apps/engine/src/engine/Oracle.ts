import { Actor } from "../engine/Actor.js";

export type Oracle = {
  actor: () => Promise<Actor>;
};
