import { Node } from "./Node.js";
import { Value } from "./Value.js";
import { Edge } from "./Edge.js";
import { Pointer } from "./Pointer.js";
import { Operation } from "./Operation.js";
import { Result } from "./Result.js";

export type Graph = {
  id: () => Promise<string>;
  value: () => Promise<Value | null>;
  nodes: () => Promise<Node[]>;
  edges: () => Promise<Edge[]>;
  references: () => Promise<Pointer[]>;

  operations: {
    nodes: {
      append: {
        request: (target: Node) => Promise<Operation>;
        generate: (target: Operation) => Promise<Node>;
        apply: (node: Node) => Promise<Result>;
      };

      expand: {
        request: (target: Node) => Promise<Operation>;
        generate: (target: Operation) => Promise<Node[]>;
        apply: (nodes: Node[]) => Promise<Result>;
      };

      map: {
        request: (target: Node[]) => Promise<Operation>;
        generate: (target: Operation) => Promise<Node[]>;
        apply: (nodes: Node[]) => Promise<Result>;
      };

      reduce: {
        request: (target: Node[]) => Promise<Operation>;
        generate: (target: Operation) => Promise<Node>;
        apply: (node: Node) => Promise<Result>;
      };
    };
  };
};
