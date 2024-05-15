import { Graph } from "../types/Graph.js";

export type Environment = {
  graph: () => Promise<Graph>;
};
