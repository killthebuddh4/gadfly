import { Actor } from "../actor/Actor.js";
import { Listener } from "../listener/Listener.js";

export type Router = {
  actor: Actor;
  listener: Listener;
  targets: Actor[];
};
