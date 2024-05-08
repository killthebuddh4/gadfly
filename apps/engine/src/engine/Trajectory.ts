import { Graph } from "../primitives/Graph.js";
import { Sequence } from "../primitives/Sequence.js";
import { Result } from "../primitives/Result.js";

export type Trajectory = {
  owner: () => Promise<Graph>;
  unwrap: () => Promise<Graph>;
  signals: () => Promise<Sequence>;
  signal: (signal: Node) => Promise<Result>;
  feedback: (signal: Node, feedback: Node) => Promise<Result>;
};
