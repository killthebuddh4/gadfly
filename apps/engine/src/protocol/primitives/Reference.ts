import { Node } from "./Node.js";
import { Type } from "./Type.js";
import { Pointer } from "./Pointer.js";

export type Reference = {
  id: () => Promise<string>;
  type: () => Promise<Type>;
  node: () => Promise<Node>;
  pointer: () => Promise<Pointer>;
};
