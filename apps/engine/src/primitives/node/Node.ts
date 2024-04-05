import { Actor } from "../actor/Actor.js";

export type Node = {
  actor: Actor;
  synthetic: Actor;
  analytic: Actor;
  parent: Node | null;
  children: Node[];
};
