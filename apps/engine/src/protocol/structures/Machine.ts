import { Graph } from "../graphs/types/Graph.js";
import { Phase } from "./Phase.js";
import { Result } from "../graphs/types/Result.js";
import { Generation } from "../graphs/types/Generation.js";

export type Machine<S> = {
  unwrap: () => Promise<Graph>;

  machine: {
    tails: () => Promise<Phase<S>[]>;
    heads: () => Promise<Phase<S>[]>;
  };

  operation: {
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
