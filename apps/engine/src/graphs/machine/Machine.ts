import { Graph } from "../../primitives/Graph.js";
import { Phase } from "./Phase.js";
import { Result } from "../../primitives/Result.js";
import { Generation } from "../../primitives/Generation.js";

export type Machine<S> = {
  unwrap: () => Promise<Graph>;

  tails: () => Promise<Phase<S>[]>;
  heads: () => Promise<Phase<S>[]>;

  generation: {
    phases: {
      append: {
        request: (target: Phase<S>) => Promise<Generation>;
        generate: (target: Generation) => Promise<Phase<S>>;
        apply: (node: Phase<S>) => Promise<Result>;
      };

      expand: {
        request: (target: Phase<S>) => Promise<Generation>;
        generate: (target: Generation) => Promise<Phase<S>[]>;
        apply: (nodes: Phase<S>[]) => Promise<Result>;
      };

      map: {
        request: (target: Phase<S>[]) => Promise<Generation>;
        generate: (target: Generation) => Promise<Phase<S>[]>;
        apply: (nodes: Phase<S>[]) => Promise<Result>;
      };

      reduce: {
        request: (target: Phase<S>[]) => Promise<Generation>;
        generate: (target: Generation) => Promise<Phase<S>>;
        apply: (node: Phase<S>) => Promise<Result>;
      };
    };
  };
};
