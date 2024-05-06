import { Node } from "../../primitives/Node.js";

export type Signal = {
  node: () => Promise<Node>;
};
