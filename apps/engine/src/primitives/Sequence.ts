import { Graph } from "./Graph.js";
import { Result } from "./Result.js";
import { Element } from "./Element.js";

export type Sequence<G = Graph> = {
  unwrap: () => Promise<Graph>;
  tail: () => Promise<Element<G>>;
  head: () => Promise<Element<G>>;
  append: (element: Element<G>) => Promise<Result>;
};
