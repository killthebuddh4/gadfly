import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Graph } from "./Graph.js";

export type Edge = {
  id: () => Promise<string>;
  graph: () => Promise<Graph>;
  value: () => Promise<Value>;
  from: () => Promise<Node>;
  to: () => Promise<Node | null>;
};
