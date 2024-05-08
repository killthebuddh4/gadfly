import { Sequence } from "./Sequence.js";
import { Graph } from "./Graph.js";
import { Element } from "./Element.js";
import { Result } from "./Result.js";

export type Flow = {
  unwrap: () => Promise<Graph>;
  tail: () => Promise<Sequence>;
  heads: () => Promise<Sequence[]>;
  append: (target: Sequence, element: Element) => Promise<Result>;
  map: (target: Sequence, to: Sequence[]) => Promise<Result>;
  reduce: (targets: Sequence[], to: Sequence) => Promise<Result>;
  fork: (target: Sequence, flow: Flow) => Promise<Result>;
};
