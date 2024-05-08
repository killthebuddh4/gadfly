import { Node } from "../primitives/Node.js";

export type Value = {
  unwrap: () => Promise<Node>;
};
