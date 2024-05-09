import { Actor } from "./Actor.js";

export type Oracle = {
  actor: () => Promise<Actor>;
};
