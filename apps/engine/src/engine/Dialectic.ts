import { Flow } from "../graphs/Flow.js";
import { Machine } from "../graphs/Machine.js";
import { Actor } from "./Actor.js";

export type Dialectic = {
  flow: () => Promise<Flow>;
  machine: () => Promise<Machine>;
  actors: () => Promise<Actor[]>;
};
