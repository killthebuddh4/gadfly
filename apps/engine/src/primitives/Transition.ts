import { Graph } from "./Graph.js";
import { Machine } from "./Machine.js";
import { Phase } from "./Phase.js";

export type Transition<G = Graph> = {
  unwrap: () => Promise<Graph>;
  owner: () => Promise<Machine<G>>;
  upstream: () => Promise<Phase<G>>;
  downstream: () => Promise<Phase<G>>;
};
