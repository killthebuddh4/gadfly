import { Node } from "../primitives/Node.js";

export type Comment = {
  node: () => Promise<Node>;
};
