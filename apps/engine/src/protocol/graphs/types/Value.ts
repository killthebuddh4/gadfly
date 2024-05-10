import { Type } from "./Type.js";
import { Graph } from "./Graph.js";
import { Edge } from "./Edge.js";
import { Node } from "./Node.js";
import { Pointer } from "./Pointer.js";
import { Operation } from "./Operation.js";

export type Value = {
  id: () => Promise<string>;
  type: () => Promise<Type>;
  value: () => Promise<string>;
  graph: () => Promise<Graph | null>;
  node: () => Promise<Node | null>;
  edge: () => Promise<Edge | null>;
  operation: () => Promise<Operation | null>;
  references: () => Promise<Pointer[]>;
};
