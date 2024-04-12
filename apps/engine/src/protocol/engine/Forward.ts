import { Engine } from "./Engine.js";
import { Trajectory } from "./Trajectory.js";
import { Command } from "./Command.js";

export type Forward = (args: {
  engine: Engine;
  command: Command;
}) => Promise<Trajectory>;
