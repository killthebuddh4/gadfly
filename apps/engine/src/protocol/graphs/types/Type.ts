import { Value } from "./Value.js";
import { Node } from "./Node.js";
import { Edge } from "./Edge.js";
import { Graph } from "./Graph.js";
import { Operation } from "./Operation.js";
import { Pointer } from "./Pointer.js";

export type Type = {
  id: () => Promise<string>;
  type: () => Promise<number>;
  values: () => Promise<Value[]>;
  graphs: () => Promise<Graph[]>;
  nodes: () => Promise<Node[]>;
  edges: () => Promise<Edge[]>;
  operations: () => Promise<Operation[]>;
  references: () => Promise<Pointer[]>;
};
