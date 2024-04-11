import { Node } from "../node/Node.js";
import { Filter } from "../message/Filter.js";

export type Proxy = {
  node: Node;
  filter: Filter;
};
