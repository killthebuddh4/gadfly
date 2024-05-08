import { Flow } from "./Flow.js";
import { Graph } from "./Graph.js";

export type State<G = Graph> = {
  unwrap: () => Promise<G>;
  container: () => Promise<Flow<G>>;

  upstream: () => Promise<State<G>[]>;
  downstream: () => Promise<State<G>[]>;
};
