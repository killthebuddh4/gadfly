import { Actor } from "../actor/Actor.js";
import { Listener } from "../listener/Listener.js";

export type Hypervisor = {
  actor: Actor;
  listener: Listener;
};
