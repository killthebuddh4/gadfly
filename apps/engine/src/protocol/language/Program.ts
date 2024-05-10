import { Expression } from "./Expression.js";
import { Environment } from "./Environment.js";
import { Trajectory } from "./Trajectory.js";

export type Program = {
  expression: () => Promise<Expression>;
  environment: () => Promise<Environment>;
  trajectory: () => Promise<Trajectory>;
};
