import { Graph } from "../graphs/types/Graph.js";
import { Result } from "../graphs/types/Result.js";
import { Element } from "./Element.js";
import { Generation } from "../graphs/types/Generation.js";

export type Sequence<S> = {
  unwrap: () => Promise<Graph>;

  sequence: {
    tail: () => Promise<Element<S>>;
    head: () => Promise<Element<S>>;
  };

  operation: {
    elements: {
      append: {
        request: (target: Element<S>) => Promise<Generation>;
        generate: (target: Generation) => Promise<Element<S>>;
        apply: (node: Element<S>) => Promise<Result>;
      };
    };
  };
};
