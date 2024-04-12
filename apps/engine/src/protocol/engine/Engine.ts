import { Trajectory } from "./Trajectory.js";

export type Engine = {
  history: Trajectory;
  options: string[];
};
