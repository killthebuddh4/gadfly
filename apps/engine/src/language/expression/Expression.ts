import { Tree } from "../../primitives/Tree.js";
import { Node } from "../../primitives/Node.js";
import { Flow } from "../../primitives/Flow.js";
import { Trajectory } from "../../primitives/Trajectory.js";
import { Result } from "../../primitives/Result.js";
import { Comment } from "../Comment.js";

export type Expression = {
  owner: () => Promise<Expression>;
  unwrap: () => Promise<Flow>;

  comment: () => Promise<Comment>;

  parent: () => Promise<Expression>;
  children: () => Promise<Expression[]>;
  bindings: () => Promise<Expression>;

  run: (trajectory: Trajectory) => Promise<Result>;
  trajectories: () => Promise<Trajectory[]>;
};
