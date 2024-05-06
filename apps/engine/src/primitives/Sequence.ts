import { Graph } from "./Graph.js";
import { Element } from "./Element.js";
import { Result } from "./Result.js";

export type Sequence = {
  graph: () => Promise<Graph>;
  prev: () => Promise<Sequence | null>;
  next: () => Promise<Sequence[]>;
  tail: () => Promise<Element>;
  head: () => Promise<Element>;
  append: (element: Element) => Promise<Result>;
};
