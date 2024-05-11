import { Type } from "./Type.js";
import { Graph } from "./Graph.js";
import { Edge } from "./Edge.js";
import { Node } from "./Node.js";
import { Pointer } from "./Pointer.js";
import { Generation } from "./Generation.js";

export type Value = {
  id: () => Promise<string>;
  type: () => Promise<Type>;
  value: () => Promise<string>;
  graph: () => Promise<Graph | null>;
  node: () => Promise<Node | null>;
  edge: () => Promise<Edge | null>;
  generation: () => Promise<Generation | null>;
  references: () => Promise<Pointer[]>;
};
