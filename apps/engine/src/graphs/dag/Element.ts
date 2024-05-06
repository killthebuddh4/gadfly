import { Node } from "../../primitives/Node.js";
import { Sequence } from "./Sequence.js";

export type Element = {
  node: () => Promise<Node>;
  step: () => Promise<Element>;
  map: () => Promise<Sequence[]>;
};
