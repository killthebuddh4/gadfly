import { Type } from "./Type.js";
import { Value } from "./Value.js";
import { Graph } from "./Graph.js";
import { Node } from "./Node.js";
import { Reference } from "./Reference.js";
import { Edge } from "./Edge.js";
import { Operation } from "./Operation.js";

export type Pointer = {
  id: () => Promise<string>;
  from: () => Promise<Reference | null>;
  to: () => Promise<Value | Type | Graph | Node | Edge | Operation>;
};
