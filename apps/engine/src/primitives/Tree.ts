import { Graph } from "./Graph.js";
import { Leaf } from "./Leaf.js";
import { Result } from "./Result.js";
import { Expand } from "./Expand.js";

export type Tree<G = Graph> = {
  unwrap: () => Promise<Graph>;
  tail: () => Promise<Leaf<G>>;
  heads: () => Promise<Leaf<G>[]>;

  leaves: {
    read: () => Promise<Leaf<G>[]>;

    expand: {
      request: (request: Expand) => Promise<Result>;
      generate: (target: Expand) => Promise<Leaf<G>[]>;
      apply: (leaves: Leaf<G>[]) => Promise<Result>;
    };
  };
};
