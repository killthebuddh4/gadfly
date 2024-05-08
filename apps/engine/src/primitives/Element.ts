import { Graph } from "./Graph.js";
import { Sequence } from "./Sequence.js";

export type Element = {
  owner: () => Promise<Sequence>;
  unwrap: () => Promise<Graph>;
  parent: () => Promise<Element | null>;
  child: () => Promise<Element | null>;
};
