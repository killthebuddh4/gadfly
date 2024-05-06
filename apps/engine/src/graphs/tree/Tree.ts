import { Graph } from "../../primitives/Graph.js";
import { Leaf } from "./Leaf.js";

export type Tree = {
  graph: () => Promise<Graph>;
  root: () => Promise<Leaf>;
  leaves: () => Promise<Leaf[]>;
  grow: (leaf: Leaf) => Promise<Leaf[]>;
};
