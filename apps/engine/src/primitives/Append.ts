import { Pointer } from "./Pointer.js";
import { Value } from "./Value.js";

export type Append = {
  id: () => Promise<string>;
  value: () => Promise<Value>;
  pointer: () => Promise<Pointer>;
};
