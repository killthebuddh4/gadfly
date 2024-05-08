import { Graph } from "../../primitives/Graph.js";
import { State } from "./State.js";
import { Trajectory } from "../Trajectory.js";
import { Transition } from "./Transition.js";
import { Result } from "../../primitives/Result.js";

export type Machine = {
  unwrap: () => Promise<Graph>;
  initial: () => Promise<State[]>;
  terminal: () => Promise<State[]>;
  states: () => Promise<State[]>;
  // TODO We should probably wrap this in something that is specific
  // to machines (i.e. uses Transition)
  trajectories: () => Promise<Trajectory[]>;
  add: (state: State) => Promise<Result>;
  connect: (state: State) => Promise<Result>;
  init: (state: State) => Promise<Trajectory>;
  transition: (target: Trajectory, transition: Transition) => Promise<Result>;
};
