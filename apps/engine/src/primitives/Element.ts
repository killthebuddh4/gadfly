import { Node } from "./Node.js";
import { Sequence } from "./Sequence.js";

export type Element = {
  owner: () => Promise<Sequence>;
  unwrap: () => Promise<Node>;
  prev: () => Promise<Element | null>;
  next: () => Promise<Element | null>;
};
