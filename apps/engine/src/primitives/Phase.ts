import { Machine } from "./Machine.js";
import { Graph } from "./Graph.js";

export type Phase<G = Graph> = {
  unwrap: () => Promise<G>;
  container: () => Promise<Machine<G>>;

  upstream: () => Promise<Phase<G>[]>;
  downstream: () => Promise<Phase<G>[]>;
};
