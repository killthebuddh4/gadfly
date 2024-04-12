import { Command } from "./Command.js";

export type Trajectory = {
  command: Command;
  parent: Trajectory | null;
  children: Trajectory[];
};
