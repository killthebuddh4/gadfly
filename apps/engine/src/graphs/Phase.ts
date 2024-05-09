import { Machine } from "./Machine.js";
import { Graph } from "../primitives/Graph.js";
import { Transition } from "./Transition.js";

export type Phase<G = Graph> = {
  unwrap: () => Promise<G>;
  container: () => Promise<Machine<G>>;

  upstream: () => Promise<Transition<G>[]>;
  downstream: () => Promise<Transition<G>[]>;
};
