import { Node } from "../../primitives/Node.js";

export type State = {
  node: () => Promise<Node>;
  upstream: () => Promise<State[]>;
  downstream: () => Promise<State[]>;
};
