import { Node } from "../primitives/Node.js";
import { Lambda } from "./Lambda.js";
import { Expression } from "./Expression.js";

export type Comment = {
  owner: () => Promise<Lambda | Expression>;
  unwrap: () => Promise<Node>;
};
