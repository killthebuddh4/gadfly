import { Graph } from "./Graph.js";
import { Element } from "./Element.js";
import { Result } from "./Result.js";

export type Sequence = {
  unwrap: () => Promise<Graph>;
  tail: () => Promise<Element>;
  head: () => Promise<Element>;
  append: (element: Element) => Promise<Result>;
};
