import { Graph } from "../graphs/types/Graph.js";

export type Trajectory = {
  unwrap: () => Promise<Graph>;
};
