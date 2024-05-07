import { Signal } from "./Signal.js";
import { Node } from "../../primitives/Node.js";

export type Feedback = {
  node: () => Promise<Node>;
  signal: () => Promise<Signal>;
};
