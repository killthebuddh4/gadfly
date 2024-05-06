import { Node } from "../../primitives/Node.js";

export type Leaf = {
  node: () => Promise<Node>;
  parent: () => Promise<Leaf | null>;
  children: () => Promise<Leaf[]>;
  grow: () => Promise<Leaf[]>;
};
