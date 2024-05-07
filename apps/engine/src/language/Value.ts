import { Node } from "../primitives/Node.js";

export type Value = {
  node: () => Promise<Node>;
};
