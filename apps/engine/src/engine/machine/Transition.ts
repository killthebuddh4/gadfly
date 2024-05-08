import { State } from "./State.js";
import { Signal } from "./Signal.js";
import { Sequence } from "../../primitives/Sequence.js";
import { Machine } from "./Machine.js";

export type Transition = {
  owner: () => Promise<Machine>;
  unwrap: () => Promise<Sequence>;
  start: () => Promise<State>;
  signal: () => Promise<Signal>;
  finish: () => Promise<State>;
};
