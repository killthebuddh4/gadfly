import { Flow } from "../graphs/flow/Flow.js";
import { Machine } from "../graphs/machine/Machine.js";
import { Actor } from "./Actor.js";

export type Dialectic = {
  flow: () => Promise<Flow>;
  machine: () => Promise<Machine>;
  actors: () => Promise<Actor[]>;
};
