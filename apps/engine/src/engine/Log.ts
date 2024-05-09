import { Flow } from "../graphs/flow/Flow.js";
import { Branch } from "./Branch.js";
import { Graph } from "../primitives/Graph.js";
import { Result } from "../primitives/Result.js";
import { Append } from "../primitives/operation/Append.js";
import { Expand } from "../primitives/operation/Expand.js";
import { Reduce } from "../primitives/operation/Reduce.js";

export type Log<G = Graph> = {
  log: () => Promise<Log<G>>;

  wrap: (flow: Flow) => Promise<Flow<Log<G>>>;
  unwrap: () => Promise<Flow>;

  tails: () => Promise<Branch<G>[]>;
  heads: () => Promise<Branch<G>[]>;

  branches: {
    read: () => Promise<Branch<G>[]>;

    append: {
      request: (request: Append) => Promise<Result>;
      generate: (target: Append) => Promise<Branch<G>>;
      apply: (branch: Branch<G>) => Promise<Result>;
    };

    expand: {
      request: (request: Expand) => Promise<Result>;
      generate: (target: Expand) => Promise<Branch<G>[]>;
      apply: (branches: Branch<G>[]) => Promise<Result>;
    };

    reduce: {
      request: (request: Reduce) => Promise<Result>;
      generate: (target: Reduce) => Promise<Branch<G>>;
      apply: (branch: Branch<G>) => Promise<Result>;
    };
  };
};
