import { Value } from "./Value.js";
import { Graph } from "./Graph.js";
import { Edge } from "./Edge.js";
import { Synthesis } from "./Synthesis.js";
import { Result } from "./Result.js";

export type Node = {
  id: () => Promise<string>;
  graph: () => Promise<Graph>;
  value: () => Promise<Value | null>;
  upstream: () => Promise<Edge[]>;
  downstream: () => Promise<Edge[]>;

  synthesize: {
    value: {
      request: () => Promise<Synthesis>;
      synthesize: (target: Synthesis) => Promise<Value>;
      apply: (value: Value) => Promise<Result>;
    };
  };
};
