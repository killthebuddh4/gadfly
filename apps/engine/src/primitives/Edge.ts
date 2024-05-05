import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Type } from "./Type.js";

export type Edge = {
  id: () => Promise<string>;
  type: () => Promise<Type>;
  value: () => Promise<Value>;
  from: () => Promise<Node>;
  to: () => Promise<Node>;
};
