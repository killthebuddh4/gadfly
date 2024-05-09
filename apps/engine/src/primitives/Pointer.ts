import { Value } from "./Value.js";
import { Graph } from "./Graph.js";
import { Node } from "./Node.js";
import { Result } from "./Result.js";
import { Synthesis } from "./Synthesis.js";

export type Pointer = {
  id: () => Promise<string>;
  value: () => Promise<Value | null>;
  node: () => Promise<Node>;
  from: () => Promise<Graph>;
  to: () => Promise<Graph | null>;

  synthesize: {
    value: {
      request: () => Promise<Synthesis>;
      synthesize: (target: Synthesis) => Promise<Value>;
      apply: (value: Value) => Promise<Result>;
    };
  };
};
