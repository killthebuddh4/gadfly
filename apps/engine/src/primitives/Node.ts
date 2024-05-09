import { Value } from "./Value.js";
import { Graph } from "./Graph.js";

export type Node = {
  owner: () => Promise<Graph>;
  id: () => Promise<string>;
  value: () => Promise<Value>;
  upstream: () => Promise<Node[]>;
  downstream: () => Promise<Node[]>;
};
