import { Node } from "../../primitives/Node.js";
import { Signal } from "./Signal.js";
import { Transition } from "./Transition.js";

export type State = {
  node: () => Promise<Node>;
  inputs: () => Promise<State[]>;
  outputs: () => Promise<State[]>;
  connect: (state: State) => Promise<void>;
  signal: (signal: Signal) => Promise<Transition>;
};
