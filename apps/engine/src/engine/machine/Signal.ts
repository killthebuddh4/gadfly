import { Node } from "../../primitives/Node.js";
import { Transition } from "./Transition.js";
import { State } from "./State.js";

export type Signal = {
  owner: () => Promise<Transition>;
  unwrap: () => Promise<Node>;
  previous: () => Promise<State>;
  next: () => Promise<State>;
};
