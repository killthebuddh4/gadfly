import { Graph } from "./Graph.js";
import { State } from "./State.js";
import { Result } from "./Result.js";

export type Flow<G = Graph> = {
  unwrap: () => Promise<Graph>;

  tails: () => Promise<State<G>[]>;
  heads: () => Promise<State<G>[]>;

  append: (target: State<G>, state: State<G>) => Promise<Result>;
  map: (target: State<G>, to: State<G>[]) => Promise<Result>;
  reduce: (targets: State<G>[], to: State<G>) => Promise<Result>;
};
