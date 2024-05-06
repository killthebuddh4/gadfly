import { Node } from "../../primitives/Node.js";
import { Sequence } from "./Sequence.js";

export type Element = {
  node: () => Promise<Node>;
  prev: () => Promise<Element | null>;
  next: () => Promise<Element | null>;
  step: () => Promise<Element>;
  map: () => Promise<Sequence[]>;
};
