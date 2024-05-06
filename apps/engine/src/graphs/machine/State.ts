import { Node } from "../../primitives/Node.js";
import { Signal } from "./Signal.js";

export type State = {
  node: () => Promise<Node>;
  upstream: () => Promise<State[]>;
  downstream: () => Promise<State[]>;
};
