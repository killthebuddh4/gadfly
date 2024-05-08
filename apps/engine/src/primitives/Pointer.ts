import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Graph } from "./Graph.js";

export type Pointer = {
  owner: () => Promise<Graph>;
  id: () => Promise<string>;
  value: () => Promise<Value>;
  from: () => Promise<Graph>;
  to: () => Promise<Graph>;
};
