import { Sequence } from "../structures/sequence/Sequence.js";
import { Commit } from "./Commit.js";
import { Log } from "./Log.js";
import { Generation } from "../graphs/types/Generation.js";
import { Result } from "../graphs/types/Result.js";

export type Branch<S> = {
  unwrap: () => Promise<Sequence<Commit<S>>>;

  tail: () => Promise<Commit<S> | null>;
  head: () => Promise<Commit<S> | null>;

  container: () => Promise<Log<S>>;
  upstream: () => Promise<Branch<S>[] | null>;
  downstream: () => Promise<Branch<S>[] | null>;

  operation: {
    commits: {
      append: {
        request: () => Promise<Generation>;
        generate: (target: Generation) => Promise<Commit<S>>;
        apply: (commit: Commit<S>) => Promise<Result>;
      };
    };
  };
};
