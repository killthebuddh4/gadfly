import { Graph } from "./Graph.js";
import { Sequence } from "./Sequence.js";
import { Result } from "./Result.js";

export type Trajectory = {
  owner: () => Promise<Graph>;
  unwrap: () => Promise<Graph>;
  signals: () => Promise<Sequence>;
  signal: (signal: Node) => Promise<Result>;
  feedback: (signal: Node, feedback: Node) => Promise<Result>;
};
