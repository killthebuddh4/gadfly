import { Handler } from "../signal/Handler.js";
import { Node } from "../node/Node.js";

export type Actor = {
  inbox: Node;
  receive: Handler;
  exec: Handler;
  patch: Handler;
  kill: Handler;
  yield: Handler;
  query: Handler;
  error: Handler;
};
