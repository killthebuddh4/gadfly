import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Edge } from "./Edge.js";
import { Result } from "./Result.js";

export type Graph = {
  id: () => Promise<string>;
  value: () => Promise<Value>;

  nodes: {
    read: () => Promise<Node[]>;

    append: {
      apply: (node: Node) => Promise<Result>;
    };
  };

  edges: {
    read: () => Promise<Edge[]>;

    append: {
      apply: (edge: Edge) => Promise<Result>;
    };
  };
};
