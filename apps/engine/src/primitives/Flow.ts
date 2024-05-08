import { Graph } from "./Graph.js";
import { Element } from "./Element.js";
import { Result } from "./Result.js";

export type Flow = {
  unwrap: () => Promise<Graph>;
  tail: () => Promise<Graph>;
  heads: () => Promise<Graph[]>;
  append: (target: Graph, element: Element) => Promise<Result>;
  map: (target: Graph, to: Graph[]) => Promise<Result>;
  reduce: (targets: Graph[], to: Graph) => Promise<Result>;
  fork: (target: Graph, flow: Flow) => Promise<Result>;
};
