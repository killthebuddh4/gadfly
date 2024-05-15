import { Sequence } from "./Sequence.js";
import { Commit } from "./Commit.js";
import { Log } from "./Log.js";
import { Operation } from "./Operation.js";
import { Result } from "./Result.js";

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
        request: () => Promise<Operation>;
        generate: (target: Operation) => Promise<Commit<S>>;
        apply: (commit: Commit<S>) => Promise<Result>;
      };
    };
  };
};
