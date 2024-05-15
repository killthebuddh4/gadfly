import { Graph } from "../graphs/types/Graph.js";
import { State } from "../state/State.js";
import { Result } from "../graphs/types/Result.js";
import { Generation } from "../graphs/types/Generation.js";

export type Flow<S> = {
  unwrap: () => Promise<Graph>;

  flow: {
    tails: () => Promise<State<S>[]>;
    heads: () => Promise<State<S>[]>;
  };

  operation: {
    states: {
      append: {
        request: (target: State<S>) => Promise<Generation>;
        generate: (target: Generation) => Promise<State<S>>;
        apply: (node: State<S>) => Promise<Result>;
      };

      expand: {
        request: (target: State<S>) => Promise<Generation>;
        generate: (target: Generation) => Promise<State<S>[]>;
        apply: (nodes: State<S>[]) => Promise<Result>;
      };

      map: {
        request: (target: State<S>[]) => Promise<Generation>;
        generate: (target: Generation) => Promise<State<S>[]>;
        apply: (nodes: State<S>[]) => Promise<Result>;
      };

      filter: {
        request: (target: State<S>[]) => Promise<Generation>;
        generate: (target: Generation) => Promise<State<S>[]>;
        apply: (nodes: State<S>[]) => Promise<Result>;
      };

      reduce: {
        request: (target: State<S>[]) => Promise<Generation>;
        generate: (target: Generation) => Promise<State<S>>;
        apply: (node: State<S>) => Promise<Result>;
      };
    };
  };
};
