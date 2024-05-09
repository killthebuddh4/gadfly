import { Graph } from "../../primitives/Graph.js";
import { Result } from "../../primitives/Result.js";
import { Element } from "./Element.js";
import { Synthesis } from "../../primitives/Synthesis.js";
import { Value } from "../../primitives/Value.js";
import { Generation } from "../../primitives/Generation.js";

export type Sequence<S> = {
  unwrap: () => Promise<Graph>;

  sequence: {
    tail: () => Promise<Element<S>>;
    head: () => Promise<Element<S>>;
  };

  synthesize: {
    value: {
      request: () => Promise<Synthesis>;
      synthesize: (target: Synthesis) => Promise<Value>;
      apply: (value: Value) => Promise<Result>;
    };
  };

  generation: {
    elements: {
      append: {
        request: (target: Element<S>) => Promise<Generation>;
        generate: (target: Generation) => Promise<Element<S>>;
        apply: (node: Element<S>) => Promise<Result>;
      };
    };
  };
};
