import { Graph } from "../../primitives/Graph.js";

export type Selection = {
  graph: () => Promise<Graph>;
};
