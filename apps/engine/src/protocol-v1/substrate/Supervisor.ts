import { Selector } from "./Selector.js";
import { Actor } from "./Actor.js";

export type Supervisor = {
  id: string;
  selector: Selector;
  actor: Actor;
};
