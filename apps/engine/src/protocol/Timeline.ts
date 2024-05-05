import { Program } from "./Program.js";
import { Commit } from "./Commit.js";

export type Timeline = {
  now: () => Promise<Program>;
  step: (args: { target: Node; operation: Commit }) => Promise<Program>;
  fork: (args: { target: Node; operations: Commit[] }) => Promise<Program[]>;
  merge: (args: { target: Node[]; operation: Commit }) => Promise<Program>;
};
