import { Graph } from "./Graph.js";

export type Environment = {
  graph: () => Promise<Graph>;
};
