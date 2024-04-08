import { Actor } from "../actor/Actor.js";
import { Listener } from "../listener/Listener.js";

export type Supervisor = {
  actor: Actor;
  listener: Listener;
  parent: Supervisor | null;
  children: Supervisor[];
};
