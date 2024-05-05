import { Commit } from "./Commit.js";
import { Branch } from "./Branch.js";

export type Program = {
  history: () => Promise<Branch>;
  branches: () => Promise<Branch[]>;
  patch: (args: { target: Branch; commit: Commit }) => Promise<void>;
  branch: (args: { target: Commit; branches: Branch[] }) => Promise<void>;
  merge: (args: { targets: Branch[]; commit: Commit }) => Promise<void>;
  test: (args: { target: Branch }) => Promise<void>;
};
