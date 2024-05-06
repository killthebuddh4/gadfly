import { Graph } from "../../primitives/Graph.js";
import { State } from "./State.js";
import { Trajectory } from "./Trajectory.js";
import { Transition } from "./Transition.js";
import { Signal } from "./Signal.js";

export type Machine = {
  graph: () => Promise<Graph>;
  initial: () => Promise<State[]>;
  terminal: () => Promise<State[]>;
  states: () => Promise<State[]>;
  trajectories: () => Promise<Trajectory[]>;
  connect: (from: State, to: State) => Promise<void>;
  signal: (state: State, signal: Signal) => Promise<Transition>;
};
