import { Graph } from "../../primitives/Graph.js";
import { Result } from "../../primitives/Result.js";
import { Constraint } from "./Constraint.js";
import { Type } from "./Type.js";

export type Signature = {
  graph: () => Promise<Graph>;
  inputs: () => Promise<Type[]>;
  outputs: () => Promise<Type[]>;
  constraints: () => Promise<Constraint[]>;
  widen: (target: Type, type: Type) => Promise<Result>;
  narrow: (target: Type, type: Type) => Promise<Result>;
};
