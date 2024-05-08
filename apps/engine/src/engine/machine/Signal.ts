import { Node } from "../../primitives/Node.js";
import { Transition } from "./Transition.js";
import { State } from "./State.js";

export type Signal = {
  owner: () => Promise<Transition>;
  unwrap: () => Promise<Node>;
  parent: () => Promise<State>;
  child: () => Promise<State>;
};
