import { Commit } from "./Commit.js";
import { Operation } from "./Operation.js";

export type Program = {
  versions: () => Promise<Commit[]>;
  edit: (args: { target: Commit; operation: Operation }) => Promise<Commit>;
  branch: (args: {
    target: Commit;
    operations: Operation[];
  }) => Promise<Commit[]>;
  merge: (args: { target: Commit[]; operation: Operation }) => Promise<Commit>;
  execute: () => Promise<Commit>;
};
