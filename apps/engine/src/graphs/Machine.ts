import { Graph } from "../primitives/Graph.js";
import { Phase } from "./Phase.js";
import { Result } from "../primitives/Result.js";
import { Transition } from "./Transition.js";
import { Append } from "../primitives/operation/Append.js";

export type Machine<G = Graph> = {
  unwrap: () => Promise<Graph>;

  tails: () => Promise<Phase<G>[]>;
  heads: () => Promise<Phase<G>[]>;

  phases: {
    read: () => Promise<Phase<G>[]>;

    append: {
      request: (request: Append) => Promise<Result>;
      generate: (target: Append) => Promise<Phase<G>>;
      apply: (phase: Phase<G>) => Promise<Result>;
    };
  };

  transitions: {
    read: () => Promise<Transition<G>[]>;

    append: {
      request: (request: Append) => Promise<Result>;
      generate: (target: Append) => Promise<Transition<G>>;
      apply: (transition: Transition<G>) => Promise<Result>;
    };
  };
};
