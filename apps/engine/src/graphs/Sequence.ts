import { Graph } from "../primitives/Graph.js";
import { Result } from "../primitives/Result.js";
import { Element } from "./Element.js";
import { Append } from "../primitives/operation/Append.js";

export type Sequence<G = Graph> = {
  unwrap: () => Promise<Graph>;

  tail: () => Promise<Element<G>>;
  head: () => Promise<Element<G>>;

  elements: {
    read: () => Promise<Element<G>[]>;

    append: {
      request: (request: Append) => Promise<Result>;
      generate: (target: Append) => Promise<Element<G>>;
      apply: (element: Element<G>) => Promise<Result>;
    };
  };
};
