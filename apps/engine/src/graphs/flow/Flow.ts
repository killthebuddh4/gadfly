import { Graph } from "../../primitives/Graph.js";
import { State } from "./State.js";
import { Result } from "../../primitives/Result.js";
import { Generation } from "../../primitives/Generation.js";
import { Synthesis } from "../../primitives/Synthesis.js";
import { Value } from "../../primitives/Value.js";

export type Flow<S> = {
  unwrap: () => Promise<Graph>;

  flow: {
    tails: () => Promise<State<S>[]>;
    heads: () => Promise<State<S>[]>;
  };

  synthesize: {
    value: {
      request: () => Promise<Synthesis>;
      synthesize: (target: Synthesis) => Promise<Value>;
      apply: (value: Value) => Promise<Result>;
    };
  };

  generation: {
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
