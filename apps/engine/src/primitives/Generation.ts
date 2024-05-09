import { Pointer } from "./Pointer.js";
import { Synthesis } from "./Synthesis.js";
import { Value } from "./Value.js";
import { Result } from "./Result.js";

export type Generation = {
  id: () => Promise<string>;
  value: () => Promise<string>;
  pointers: () => Promise<Pointer[]>;

  synthesize: {
    value: {
      request: () => Promise<Synthesis>;
      synthesize: (target: Synthesis) => Promise<Value>;
      apply: (value: Value) => Promise<Result>;
    };
  };
};
