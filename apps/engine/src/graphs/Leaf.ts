import { Tree } from "./Tree.js";
import { Graph } from "../primitives/Graph.js";

export type Leaf<G = Graph> = {
  unwrap: () => Promise<G>;
  container: () => Promise<Tree<G>>;

  upstream: () => Promise<Leaf<G> | null>;
  downstream: () => Promise<Leaf<G>[]>;
};
