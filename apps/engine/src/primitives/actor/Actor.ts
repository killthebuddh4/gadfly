import { Handler } from "../signal/Handler.js";
import { Node } from "../node/Node.js";

export type Actor = {
  node: Node;
  parent: Actor | null;
  children: Actor[];
  init: Handler;
  value: Handler;
  query: Handler;
  error: Handler;
  patch: Handler;
  kill: Handler;
};
