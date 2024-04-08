import { Handler } from "../signal/Handler.js";
import { Node } from "../node/Node.js";

export type Actor = {
  inbox: Node;
  receive: Handler;
  exec: Handler;
  value: Handler;
  query: Handler;
  error: Handler;
  patch: Handler;
  kill: Handler;
};
