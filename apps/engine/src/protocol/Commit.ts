import { Graph } from "../primitives/Graph.js";

export type Commit = {
  node: () => Promise<Graph>;
};
