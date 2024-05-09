import { Graph } from "../primitives/Graph.js";
import { Phase } from "./Phase.js";
import { Result } from "../primitives/Result.js";
import { Operation } from "../primitives/Operation.js";

export type Machine<S> = {
  unwrap: () => Promise<Graph>;

  tails: () => Promise<Phase<S>[]>;
  heads: () => Promise<Phase<S>[]>;

  operation: {
    phases: {
      append: {
        request: (target: Phase<S>) => Promise<Operation>;
        generate: (target: Operation) => Promise<Phase<S>>;
        apply: (node: Phase<S>) => Promise<Result>;
      };

      expand: {
        request: (target: Phase<S>) => Promise<Operation>;
        generate: (target: Operation) => Promise<Phase<S>[]>;
        apply: (nodes: Phase<S>[]) => Promise<Result>;
      };

      map: {
        request: (target: Phase<S>[]) => Promise<Operation>;
        generate: (target: Operation) => Promise<Phase<S>[]>;
        apply: (nodes: Phase<S>[]) => Promise<Result>;
      };

      reduce: {
        request: (target: Phase<S>[]) => Promise<Operation>;
        generate: (target: Operation) => Promise<Phase<S>>;
        apply: (node: Phase<S>) => Promise<Result>;
      };
    };
  };
};
