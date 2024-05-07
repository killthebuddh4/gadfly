import { State } from "./State.js";
import { Signal } from "./Signal.js";

export type Transition = {
  start: () => Promise<State>;
  signal: () => Promise<Signal>;
  finish: () => Promise<State>;
};
