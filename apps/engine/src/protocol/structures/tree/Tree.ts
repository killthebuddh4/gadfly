import { Graph } from "../graphs/types/Graph.js";
import { Leaf } from "../leaf/Leaf.js";
import { Result } from "../graphs/types/Result.js";
import { Generation } from "../graphs/types/Generation.js";

export type Tree<S> = {
  unwrap: () => Promise<Graph>;

  tree: {
    tails: () => Promise<Leaf<S>[]>;
    heads: () => Promise<Leaf<S>[]>;
  };

  operation: {
    nodes: {
      append: {
        request: (target: Leaf<S>) => Promise<Generation>;
        generate: (target: Generation) => Promise<Leaf<S>>;
        apply: (node: Leaf<S>) => Promise<Result>;
      };

      expand: {
        request: (target: Leaf<S>) => Promise<Generation>;
        generate: (target: Generation) => Promise<Leaf<S>[]>;
        apply: (nodes: Leaf<S>[]) => Promise<Result>;
      };
    };
  };
};
