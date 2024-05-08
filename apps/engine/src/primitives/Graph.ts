import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Edge } from "./Edge.js";
import { Pointer } from "./Pointer.js";

export type Graph = {
  id: () => Promise<string>;
  value: () => Promise<Value>;
  nodes: () => Promise<Node[]>;
  edges: () => Promise<Edge[]>;
  upstream: () => Promise<Graph[]>;
  downstream: () => Promise<Graph[]>;
  append: (args: { node: Node; value: Value }) => Promise<Node>;
};
