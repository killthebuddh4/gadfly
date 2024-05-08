import { Node } from "../primitives/Node.js";
import { Lambda } from "./lambda/Lambda.js";
import { Expression } from "./expression/Expression.js";

export type Comment = {
  owner: () => Promise<Lambda | Expression>;
  unwrap: () => Promise<Node>;
};
