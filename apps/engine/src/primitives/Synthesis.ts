import { Type } from "./Type.js";
import { Value } from "./Value.js";

export type Synthesis = {
  id: () => Promise<string>;
  type: () => Promise<Type>;
  value: () => Promise<Value | null>;
};
