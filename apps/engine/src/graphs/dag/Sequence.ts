import { Graph } from "../../primitives/Graph.js";
import { Element } from "./Element.js";

export type Sequence = {
  graph: () => Promise<Graph>;
  tail: () => Promise<Element>;
  head: () => Promise<Element>;
  step: () => Promise<Element>;
  map: () => Promise<Sequence[]>;
};
