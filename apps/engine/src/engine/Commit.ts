import { Graph } from "../primitives/Graph.js";
import { Branch } from "./Branch.js";

export type Commit<G = Graph> = {
  container: () => Promise<Branch>;
  unwrap: () => Promise<G>;

  upstream: () => Promise<Commit<G> | null>;
  downstream: () => Promise<Commit<G>[]>;
};
