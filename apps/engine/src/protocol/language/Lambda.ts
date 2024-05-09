import { Node } from "../primitives/Node.js";
import { Graph } from "../primitives/Graph.js";
import { Result } from "../primitives/Result.js";
import { Expression } from "./Expression.js";

/* TODO Input/Output/etc should be their own types
 * so that their methods can have the right types. */

export type Lambda = {
  unwrap: () => Promise<Graph>;

  // signature: {
  //   owner: () => Promise<Lambda>;
  //   unwrap: () => Promise<Graph>;

  //   inputs: {
  //     read: () => Promise<Type[]>;
  //     add: (type: Type) => Promise<Result>;
  //     remove: (type: Type) => Promise<Result>;
  //     widen: (target: Type, type: Type) => Promise<Result>;
  //     narrow: (target: Type, type: Type) => Promise<Result>;
  //   };

  //   outputs: {
  //     read: () => Promise<Type[]>;
  //     add: (type: Type) => Promise<Result>;
  //     remove: (type: Type) => Promise<Result>;
  //     widen: (target: Type, type: Type) => Promise<Result>;
  //     narrow: (target: Type, type: Type) => Promise<Result>;
  //   };

  //   constraints: {
  //     read: () => Promise<Constraint[]>;
  //     add: (constraint: Constraint) => Promise<Result>;
  //     remove: (constraint: Constraint) => Promise<Result>;
  //     widen: (target: Constraint, constraint: Constraint) => Promise<Result>;
  //     narrow: (target: Constraint, constraint: Constraint) => Promise<Result>;
  //   };
  // };

  // body: () => Promise<Expression>;

  // run: (trajectory: Trajectory) => Promise<Trajectory>;
  // trajectories: () => Promise<Trajectory[]>;
};
