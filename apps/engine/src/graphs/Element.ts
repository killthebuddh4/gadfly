import { Graph } from "../primitives/Graph.js";
import { Sequence } from "./Sequence.js";

export type Element<G = Graph> = {
  container: () => Promise<Sequence<G>>;
  unwrap: () => Promise<G>;
  upstream: () => Promise<Element<G> | null>;
  downstream: () => Promise<Element<G> | null>;
};
