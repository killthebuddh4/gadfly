import { Value } from "./Value.js";
import { Edge } from "./Edge.js";
import { Pointer } from "./Pointer.js";
import { Type } from "./Type.js";

export type Operation = {
  id: () => Promise<string>;
  type: () => Promise<Type>;
  value: () => Promise<Value>;
  edges: () => Promise<Edge[]>;
  references: () => Promise<Pointer[]>;
};
