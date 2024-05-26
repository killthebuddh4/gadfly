import { Graph } from "./Graph.js";
import { Result } from "./Result.js";
import { Element } from "./Element.js";
import { Operation } from "./Operation.js";

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
