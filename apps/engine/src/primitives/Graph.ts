import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Edge } from "./Edge.js";

export type Graph = {
  id: () => Promise<string>;
  type: () => Promise<string>;
  value: () => Promise<Value>;
  nodes: () => Promise<Node[]>;
  edges: () => Promise<Edge[]>;
  addNode: (args: { edge: Edge; value: Value }) => Promise<Node>;
  addEdge: (args: { node: Node; value: Value }) => Promise<Edge>;
};
