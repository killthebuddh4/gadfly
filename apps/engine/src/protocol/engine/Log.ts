import { Flow } from "../structures/Flow.js";
import { Branch } from "./Branch.js";
import { Result } from "../graphs/types/Result.js";
import { Generation } from "../graphs/types/Generation.js";

export type Log<S> = {
  unwrap: () => Promise<Flow<Branch<S>>>;

  log: {
    tail: () => Promise<Branch<S>[]>;
    heads: () => Promise<Branch<S>[]>;
  };

  operation: {
    branches: {
      append: {
        request: (request: Generation) => Promise<Result>;
        generate: (target: Generation) => Promise<Branch<S>>;
        apply: (branch: Branch<S>) => Promise<Result>;
      };

      expand: {
        request: (request: Generation) => Promise<Result>;
        generate: (target: Generation) => Promise<Branch<S>[]>;
        apply: (branches: Branch<S>[]) => Promise<Result>;
      };

      reduce: {
        request: (request: Generation) => Promise<Result>;
        generate: (target: Generation) => Promise<Branch<S>>;
        apply: (branch: Branch<S>) => Promise<Result>;
      };
    };
  };
};
