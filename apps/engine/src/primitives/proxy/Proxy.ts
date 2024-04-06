import { Selector } from "../selector/Selector.js";
import { Node } from "../node/Node.js";

export type Proxy = {
  id: string;
  selector: Selector;
  actor: Node;
};
