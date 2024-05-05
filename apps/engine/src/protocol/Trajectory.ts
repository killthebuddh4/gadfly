import { Graph } from "../primitives/Graph.js";

export type Trajectory = {
  signals: () => Promise<Graph>;
  feedback: () => Promise<Graph>;
};
