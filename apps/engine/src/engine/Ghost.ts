import { Actor } from "../engine/Actor.js";

export type Ghost = {
  actor: () => Promise<Actor>;
};
