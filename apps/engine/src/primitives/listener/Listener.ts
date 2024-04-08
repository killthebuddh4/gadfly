import { Actor } from "../actor/Actor.js";
import { Filter } from "../signal/Filter.js";

export type Listener = {
  id: string;
  actor: Actor;
  filter: Filter;
};
