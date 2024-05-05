import { Node } from "../primitives/Node.js";

export type Commit = {
  node: () => Promise<Node>;
};
