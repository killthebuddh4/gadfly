import { Flow } from "../primitives/Flow.js";
import { Machine } from "../primitives/Machine.js";
import { Actor } from "./Actor.js";

export type Dialectic = {
  flow: () => Promise<Flow>;
  machine: () => Promise<Machine>;
  actors: () => Promise<Actor[]>;
};
