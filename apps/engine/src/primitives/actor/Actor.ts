import { Handler } from "../message/Handler.js";
import { Node } from "../node/Node.js";

export type Actor = {
  node: Node;
  parent: Actor | null;
  children: Actor[];
  exec: Handler;
  feedback: Handler;
  value: Handler;
  query: Handler;
  error: Handler;
};
