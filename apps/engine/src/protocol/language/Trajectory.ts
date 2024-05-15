import { Graph } from "../types/Graph.js";

export type Trajectory = {
  unwrap: () => Promise<Graph>;
};
