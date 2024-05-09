import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Graph } from "./Graph.js";
import { Synthesis } from "./Synthesis.js";
import { Result } from "./Result.js";

export type Edge = {
  id: () => Promise<string>;
  graph: () => Promise<Graph>;
  value: () => Promise<Value | null>;
  from: () => Promise<Node>;
  to: () => Promise<Node | null>;

  synthesize: {
    value: {
      request: () => Promise<Synthesis>;
      synthesize: (target: Synthesis) => Promise<Value>;
      apply: (value: Value) => Promise<Result>;
    };
  };
};
