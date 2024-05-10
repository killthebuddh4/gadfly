import { Graph } from "../graphs/types/Graph.js";
import { Result } from "../graphs/types/Result.js";
import { Element } from "./Element.js";
import { Operation } from "../graphs/types/Operation.js";

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
