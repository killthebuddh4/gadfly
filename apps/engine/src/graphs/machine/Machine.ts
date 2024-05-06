import { Graph } from "../../primitives/Graph.js";
import { State } from "./State.js";
import { Trajectory } from "./Trajectory.js";
import { Transition } from "./Transition.js";
import { Result } from "../../primitives/Result.js";

export type Machine = {
  graph: () => Promise<Graph>;
  initial: () => Promise<State[]>;
  terminal: () => Promise<State[]>;
  states: () => Promise<State[]>;
  trajectories: () => Promise<Trajectory[]>;
  add: (state: State) => Promise<Result>;
  connect: (state: State) => Promise<Result>;
  init: (state: State) => Promise<Trajectory>;
  transition: (target: Trajectory, transition: Transition) => Promise<Result>;
};
