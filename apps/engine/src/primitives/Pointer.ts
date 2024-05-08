import { Value } from "./Value.js";
import { Graph } from "./Graph.js";

export type Pointer = {
  id: () => Promise<string>;
  graph: () => Promise<Graph>;
  value: () => Promise<Value>;
  from: () => Promise<Graph>;
  to: () => Promise<Graph>;
};
