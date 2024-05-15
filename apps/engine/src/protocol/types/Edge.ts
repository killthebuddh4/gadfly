import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Graph } from "./Graph.js";
import { Pointer } from "./Pointer.js";

export type Edge = {
  id: () => Promise<string>;
  graph: () => Promise<Graph>;
  value: () => Promise<Value | null>;
  from: () => Promise<Node>;
  to: () => Promise<Node | null>;
  references: () => Promise<Pointer[]>;
};
