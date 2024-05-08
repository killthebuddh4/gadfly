import { Graph } from "./Graph.js";
import { Phase } from "./Phase.js";
import { Sequence } from "./Sequence.js";
import { Result } from "./Result.js";

export type Machine<G = Graph> = {
  unwrap: () => Promise<G>;
  initial: () => Promise<Phase<G>[]>;
  terminal: () => Promise<Phase<G>[]>;
  states: () => Promise<Phase<G>[]>;
  add: (state: Phase<G>) => Promise<Result>;
  connect: (from: Phase<G>, to: Phase<G>) => Promise<Result>;
  init: (state: Phase<G>) => Promise<Trajectory<G>>;
  transition: (target: Trajectory<G>, to: Phase<G>) => Promise<Result>;
  trajectories: () => Promise<Trajectory<G>[]>;
};

type Trajectory<G> = Sequence<Phase<G>>;
