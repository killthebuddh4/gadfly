import { Graph } from "../primitives/Graph.js";
import { Branch } from "./Branch.js";

export type Commit<G = Graph> = {
  unwrap: () => Promise<G>;

  container: () => Promise<Branch<G>>;
  upstream: () => Promise<Commit<G> | null>;
  downstream: () => Promise<Commit<G> | null>;
};
