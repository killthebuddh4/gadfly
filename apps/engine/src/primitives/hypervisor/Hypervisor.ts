import { Actor } from "../actor/Actor.js";
import { Proxy } from "../proxy/Proxy.js";

export type Hypervisor = {
  actor: Actor;
  proxy: Proxy;
};
