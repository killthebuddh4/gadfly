import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Edge } from "./Edge.js";

export type Graph = {
  id: () => Promise<string>;
  value: () => Promise<Value>;
  nodes: () => Promise<Node[]>;
  edges: () => Promise<Edge[]>;
  append: (args: { node: Node; value: Value }) => Promise<Node>;
};
