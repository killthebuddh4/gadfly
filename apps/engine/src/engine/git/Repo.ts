import { Flow } from "../../primitives/Flow.js";
import { Commit } from "./Commit.js";
import { Branch } from "./Branch.js";
import { Result } from "../../primitives/Result.js";

export type Repo = {
  flow: () => Promise<Flow>;
  commit: (target: Branch, commit: Commit) => Promise<Result>;
  branch: (target: Commit, branch: Branch) => Promise<Result>;
  merge: (targets: Branch[], branch: Branch) => Promise<Result>;
};
