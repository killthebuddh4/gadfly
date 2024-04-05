import { Selector } from "../selector/Selector.js";
import { Actor } from "../actor/Actor.js";

export type Proxy = {
  id: string;
  selector: Selector;
  actor: Actor;
};
