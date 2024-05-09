import { Sequence } from "../graphs/sequence/Sequence.js";
import { Commit } from "./Commit.js";
import { Log } from "./Log.js";
import { Graph } from "../primitives/Graph.js";
import { Append } from "../primitives/operation/Append.js";
import { Result } from "../primitives/Result.js";

export type Branch<G = Graph> = {
  unwrap: () => Promise<Sequence<Commit<G>>>;

  tail: () => Promise<Commit<G> | null>;
  head: () => Promise<Commit<G> | null>;

  container: () => Promise<Log<G>>;
  upstream: () => Promise<Branch<G>[]>;
  downstream: () => Promise<Branch<G>[]>;

  commits: {
    read: () => Promise<Commit<G>[]>;

    append: {
      request: (request: Append) => Promise<Result>;
      generate: (target: Append) => Promise<Commit<G>>;
      apply: (commit: Commit<G>) => Promise<Result>;
    };
  };
};
