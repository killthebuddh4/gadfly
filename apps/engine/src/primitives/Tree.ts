import { Graph } from "./Graph.js";
import { Leaf } from "./Leaf.js";
import { Result } from "./Result.js";

export type Tree<G = Graph> = {
  unwrap: () => Promise<Graph>;
  tail: () => Promise<Leaf<G>>;
  heads: () => Promise<Leaf<G>[]>;
  append: (target: Leaf<G>, leaf: Leaf<G>) => Promise<Result>;
  map: (target: Leaf<G>, leaves: Leaf<G>[]) => Promise<Result>;
};
