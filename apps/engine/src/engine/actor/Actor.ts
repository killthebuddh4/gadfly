import { Trajectory } from "../../primitives/Trajectory.js";
import { Result } from "../../primitives/Result.js";

export type Actor = {
  run: (trajectory: Trajectory) => Promise<Result>;
  trajectories: () => Promise<Trajectory[]>;
};
