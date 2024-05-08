import { Node } from "../../primitives/Node.js";
import { Machine } from "./Machine.js";

export type State = {
  owner: () => Promise<Machine>;
  unwrap: () => Promise<Node>;
  parents: () => Promise<State[]>;
  children: () => Promise<State[]>;
};
