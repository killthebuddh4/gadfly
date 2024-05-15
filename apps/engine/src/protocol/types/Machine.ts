import { Phase } from "./Phase.js";
import { Operation } from "./Operation.js";
import { Graph } from "./Graph.js";
import { Result } from "./Result.js";

export type Machine<S> = {
  unwrap: () => Promise<Graph>;

  machine: {
    tails: () => Promise<Phase<S>[]>;
    heads: () => Promise<Phase<S>[]>;
  };

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
