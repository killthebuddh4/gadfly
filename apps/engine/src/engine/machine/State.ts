import { Node } from "../../primitives/Node.js";
import { Machine } from "./Machine.js";

export type State = {
  owner: () => Promise<Machine>;
  unwrap: () => Promise<Node>;
  upstream: () => Promise<State[]>;
  downstream: () => Promise<State[]>;
};
