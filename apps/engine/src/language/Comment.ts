import { Node } from "../primitives/Node.js";

export type Comment = {
  unwrap: () => Promise<Node>;
};
