import { Selector } from "./Selector.js";
import { Actor } from "./Actor.js";

export type Proxy = {
  id: string;
  selector: Selector;
  actor: Actor;
};
