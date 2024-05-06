import { Node } from "./Node.js";
import { Value } from "./Value.js";

export type Pointer = {
  id: () => Promise<string>;
  value: () => Promise<Value>;
  from: () => Promise<Node>;
  to: () => Promise<Node>;
};
