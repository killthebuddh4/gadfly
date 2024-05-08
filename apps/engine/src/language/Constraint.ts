import { Type } from "./Type.js";
import { Result } from "../primitives/Result.js";

export type Constraint = {
  unwrap: () => Promise<Type>;
  between: () => Promise<Type[]>;
  widen: (constraint: Type) => Promise<Result>;
  narrow: (constraint: Type) => Promise<Result>;
};
