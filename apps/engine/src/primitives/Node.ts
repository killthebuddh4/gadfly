import { Edge } from "./Edge.js";
import { Type } from "./Type.js";
import { Value } from "./Value.js";

export type Node = {
  id: () => Promise<string>;
  type: () => Promise<Type>;
  value: () => Promise<Value>;
  parents: () => Promise<Edge[]>;
  children: () => Promise<Edge[]>;
};
