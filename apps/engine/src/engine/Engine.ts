import { Command } from "./Command.js";
import { Trajectory } from "./Trajectory.js";

export type Engine = {
  history: Trajectory;
  head: Trajectory;
  commands: Command[];
  forward: (args: { command: Command }) => Promise<void>;
  reverse: () => Promise<void>;
};
