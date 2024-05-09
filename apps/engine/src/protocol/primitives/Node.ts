import { Value } from "./Value.js";
import { Type } from "./Type.js";
import { Graph } from "./Graph.js";
import { Edge } from "./Edge.js";
import { Reference } from "./Reference.js";
import { Pointer } from "./Pointer.js";

export type Node = {
  id: () => Promise<string>;
  graph: () => Promise<Graph>;
  type: () => Promise<Type>;
  value: () => Promise<Value | null>;
  upstream: () => Promise<Edge[]>;
  downstream: () => Promise<Edge[]>;
  references: () => Promise<Pointer[]>;
  reference: () => Promise<Reference | null>;
};
