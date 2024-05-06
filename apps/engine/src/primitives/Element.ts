import { Node } from "./Node.js";

export type Element = {
  node: () => Promise<Node>;
  prev: () => Promise<Element | null>;
  next: () => Promise<Element | null>;
};
