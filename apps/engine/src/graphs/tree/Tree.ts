import { Graph } from "../../primitives/Graph.js";
import { Leaf } from "./Leaf.js";
import { Result } from "../../primitives/Result.js";
import { Generation } from "../../primitives/Generation.js";
import { Synthesis } from "../../primitives/Synthesis.js";
import { Value } from "../../primitives/Value.js";

export type Tree<S> = {
  unwrap: () => Promise<Graph>;

  tree: {
    tails: () => Promise<Leaf<S>[]>;
    heads: () => Promise<Leaf<S>[]>;
  };

  synthesize: {
    value: {
      request: () => Promise<Synthesis>;
      synthesize: (target: Synthesis) => Promise<Value>;
      apply: (value: Value) => Promise<Result>;
    };
  };

  generation: {
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
