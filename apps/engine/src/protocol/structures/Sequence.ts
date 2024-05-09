import { Graph } from "../primitives/Graph.js";
import { Result } from "../primitives/Result.js";
import { Element } from "./Element.js";
import { Operation } from "../primitives/Operation.js";

export type Sequence<S> = {
  unwrap: () => Promise<Graph>;

  sequence: {
    tail: () => Promise<Element<S>>;
    head: () => Promise<Element<S>>;
  };

  operation: {
    elements: {
      append: {
        request: (target: Element<S>) => Promise<Operation>;
        generate: (target: Operation) => Promise<Element<S>>;
        apply: (node: Element<S>) => Promise<Result>;
      };
    };
  };
};
