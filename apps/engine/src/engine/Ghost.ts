import { Actor } from "./Actor.js";

export type Ghost = {
  actor: () => Promise<Actor>;
};
