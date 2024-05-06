import { Graph } from "./Graph.js";
import { Sequence } from "./Sequence.js";
import { Element } from "./Element.js";
import { Result } from "./Result.js";

export type Tree = {
  graph: () => Promise<Graph>;
  tail: () => Promise<Sequence>;
  heads: () => Promise<Element[]>;
  append: (target: Sequence, element: Element) => Promise<Result>;
  map: (target: Sequence, to: Sequence[]) => Promise<Result>;
};
