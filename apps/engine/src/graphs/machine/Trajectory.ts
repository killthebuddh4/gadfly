import { State } from "./State.js";
import { Transition } from "./Transition.js";
import { Sequence } from "../../primitives/Sequence.js";

export type Trajectory = {
  sequence: () => Promise<Sequence>;
  initial: () => Promise<State>;
  terminal: () => Promise<State | null>;
  transitions: () => Promise<Transition[]>;
  current: () => Promise<State>;
};
