import { Graph } from "../primitives/Graph.js";
import { State } from "./State.js";
import { Result } from "../primitives/Result.js";
import { Append } from "../primitives/operation/Append.js";
import { Expand } from "../primitives/operation/Expand.js";
import { Reduce } from "../primitives/operation/Reduce.js";

export type Flow<G = Graph> = {
  unwrap: () => Promise<Graph>;

  tails: () => Promise<State<G>[]>;
  heads: () => Promise<State<G>[]>;

  states: {
    read: () => Promise<State<G>[]>;

    append: {
      request: (request: Append) => Promise<Result>;
      generate: (target: Append) => Promise<State<G>>;
      apply: (state: State<G>) => Promise<Result>;
    };

    expand: {
      request: (request: Expand) => Promise<Result>;
      generate: (target: Expand) => Promise<State<G>[]>;
      apply: (states: State<G>[]) => Promise<Result>;
    };

    reduce: {
      request: (request: Reduce) => Promise<Result>;
      generate: (target: Reduce) => Promise<State<G>>;
      apply: (targets: State<G>[], state: State<G>) => Promise<Result>;
    };
  };
};
