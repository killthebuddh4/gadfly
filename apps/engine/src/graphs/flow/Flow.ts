import { Sequence } from "./Sequence.js";
import { Graph } from "../../primitives/Graph.js";

export type Flow = {
  graph: () => Promise<Graph>;
  tail: () => Promise<Sequence>;
  heads: () => Promise<Sequence[]>;
  step: (target: Sequence) => Promise<Sequence>;
  map: (target: Sequence) => Promise<Sequence[]>;
  filter: (targets: Sequence[]) => Promise<Sequence[]>;
  reduce: (targets: Sequence[]) => Promise<Sequence>;
  sort: (targets: Sequence[]) => Promise<Sequence[]>;
};
