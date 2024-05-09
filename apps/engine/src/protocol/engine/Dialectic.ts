import { Flow } from "../structures/Flow.js";
import { Machine } from "../structures/Machine.js";
import { Actor } from "./Actor.js";

export type Dialectic = {
  flow: () => Promise<Flow>;
  machine: () => Promise<Machine>;
  actors: () => Promise<Actor[]>;
};
