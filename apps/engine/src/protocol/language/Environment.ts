import { Graph } from "../graphs/types/Graph.js";

export type Environment = {
  graph: () => Promise<Graph>;
};
