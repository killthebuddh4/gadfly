import { Edge } from "./Edge.js";
import { Value } from "./Value.js";

export type Node = {
  id: () => Promise<string>;
  value: () => Promise<Value>;
  parents: () => Promise<Edge[]>;
  children: () => Promise<Edge[]>;
};
