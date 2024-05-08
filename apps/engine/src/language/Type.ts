import { Node } from "../primitives/Node.js";
import { Result } from "../primitives/Result.js";

export type Type = {
  unwrap: () => Promise<Node>;
  widen: (type: Type) => Promise<Result>;
  narrow: (type: Type) => Promise<Result>;
};
