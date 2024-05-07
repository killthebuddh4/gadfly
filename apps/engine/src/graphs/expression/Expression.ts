import { Tree } from "../../primitives/Tree.js";
import { Trajectory } from "./Trajectory.js";
import { Result } from "../../primitives/Result.js";

export type Expression = {
  tree: () => Promise<Tree>;
  parent: () => Promise<Expression>;
  children: () => Promise<Expression[]>;
  root: () => Promise<Expression>;
  bindings: () => Promise<Expression>;
  trajectories: () => Promise<Trajectory[]>;
  evaluate: (trajectory: Trajectory) => Promise<Result>;
};
