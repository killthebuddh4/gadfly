import { Edge } from "./Edge.js";
import { Value } from "./Value.js";
import { Pointer } from "./Pointer.js";

export type Node = {
  id: () => Promise<string>;
  value: () => Promise<Value>;
  upstream: () => Promise<Edge[]>;
  downstream: () => Promise<Edge[]>;
  parents: () => Promise<Pointer[]>;
  children: () => Promise<Pointer[]>;
};
