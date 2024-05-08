import { Flow } from "../../primitives/Flow.js";
import { Commit } from "./Commit.js";
import { Branch } from "./Branch.js";
import { Result } from "../../primitives/Result.js";

export type Log = {
  owner: () => Promise<Log>;
  unwrap: () => Promise<Flow>;

  parent: () => Promise<Log | null>;
  children: () => Promise<Log[]>;

  tail: () => Promise<Branch>;
  heads: () => Promise<Branch[]>;

  commit: {
    generate: (target: Branch) => Promise<Commit>;
    apply: (target: Branch, commit: Commit) => Promise<Result>;
  };

  branch: {
    generate: () => Promise<Branch>;
    apply: (target: Commit, branch: Branch) => Promise<Result>;
  };

  merge: {
    generate: (targets: Branch[]) => Promise<Branch>;
    apply: (
      targets: Branch[],
      branch: Branch,
      commit: Commit,
    ) => Promise<Result>;
  };

  fork: {
    generate: (target: Branch) => Promise<Log>;
    apply: (target: Branch, log: Log, commit: Commit) => Promise<Result>;
  };
};
