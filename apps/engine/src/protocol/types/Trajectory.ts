import { Graph } from "./Graph.js";

export type Trajectory = {
  unwrap: () => Promise<Graph>;
};
