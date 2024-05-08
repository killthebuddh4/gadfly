import { Flow } from "../../primitives/Flow.js";
import { Commit } from "./Commit.js";
import { Branch } from "./Branch.js";
import { Graph } from "../../primitives/Graph.js";
import { Result } from "../../primitives/Result.js";

export type Log<G = Graph> = {
  unwrap: () => Promise<Flow<Branch<G>>>;

  container: () => Promise<Log<G> | null>;
  upstream: () => Promise<Log<G>[]>;
  downstream: () => Promise<Log<G>[]>;

  tail: () => Promise<Branch<G>>;
  heads: () => Promise<Branch<G>[]>;

  commit: {
    generate: (target: Branch<G>) => Promise<Commit<G>>;
    apply: (target: Branch<G>, commit: Commit<G>) => Promise<Result>;
  };

  branch: {
    generate: () => Promise<Branch<G>>;
    apply: (target: Commit<G>, branch: Branch<G>) => Promise<Result>;
  };

  merge: {
    generate: (targets: Branch<G>[]) => Promise<Branch<G>>;
    apply: (
      targets: Branch<G>[],
      branch: Branch<G>,
      commit: Commit<G>,
    ) => Promise<Result>;
  };

  fork: {
    generate: (target: Branch<G>) => Promise<Log<G>>;
    apply: (
      target: Branch<G>,
      log: Log<G>,
      commit: Commit<G>,
    ) => Promise<Result>;
  };
};
