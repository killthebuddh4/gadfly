import { Graph } from "./Graph.js";
import { Result } from "./Result.js";

export type Tree = {
  unwrap: () => Promise<Graph>;
  tail: () => Promise<Graph>;
  heads: () => Promise<Graph[]>;
  append: (target: Graph, graph: Graph) => Promise<Result>;
  map: (target: Graph, to: Graph[]) => Promise<Result>;
};
