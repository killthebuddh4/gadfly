import { Trajectory } from "./Trajectory.js";
import { Commit } from "./Commit.js";

export type Program = {
  version: () => Promise<Commit>;
  execute: () => Promise<Trajectory>;
};
