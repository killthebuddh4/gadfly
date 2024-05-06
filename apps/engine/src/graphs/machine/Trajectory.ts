import { State } from "./State.js";
import { Flow } from "../flow/Flow.js";
import { Transition } from "./Transition.js";

/* TODO What is the specific relationship between a Trajectory and a Flow?  And a
 * Transition? I.e. to what extent do we need to wrap the data from a Flow to use
 * them in a Trajectory? */
export type Trajectory = {
  flow: () => Promise<Flow>;
  initial: () => Promise<State>;
  current: () => Promise<State>;
  terminal: () => Promise<State | null>;
  transitions: () => Promise<Transition[]>;
};
