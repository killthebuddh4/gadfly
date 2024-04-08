import { Actor } from "../actor/Actor.js";
import { Node } from "../node/Node.js";
import { Proxy } from "../proxy/Proxy.js";

export type Router = {
  actor: Actor;
  proxy: Proxy;
  targets: Node[];
};
