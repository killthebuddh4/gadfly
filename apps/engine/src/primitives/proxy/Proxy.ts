import { Node } from "../node/Node.js";
import { Selector } from "../message/Selector.js";

export type Proxy = {
  id: string;
  node: Node;
  selector: Selector;
};
