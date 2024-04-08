import { Actor } from "../actor/Actor.js";
import { Proxy } from "../proxy/Proxy.js";

export type Supervisor = {
  actor: Actor;
  proxy: Proxy;
  parent: Supervisor | null;
  children: Supervisor[];
};
