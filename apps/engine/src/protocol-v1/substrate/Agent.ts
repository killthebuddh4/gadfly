import { Actor } from "./Actor.js";
import { Network } from "./Network.js";

export type Agent = {
  actor: Actor;
  parent: Agent | null;
  children: Agent[];
  domain: Network;
};
