import { Type } from "./Type.js";
import { Value } from "./Value.js";
import { Graph } from "./Graph.js";
import { Node } from "./Node.js";
import { Edge } from "./Edge.js";
import { Generation } from "./Generation.js";

export type Pointer = {
  id: () => Promise<string>;
  from: () => Promise<Node>;
  to: () => Promise<Value | Type | Graph | Node | Edge | Generation | null>;
};
