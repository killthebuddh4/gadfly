import { Pointer } from "./Pointer.js";
import { Value } from "./Value.js";

export type Reduce = {
  id: () => Promise<string>;
  value: () => Promise<Value>;
  pointers: () => Promise<Pointer[]>;
};
