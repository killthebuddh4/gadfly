import { Flow } from "../../primitives/Flow.js";
import { Machine } from "../machine/Machine.js";

export type Dialectic = {
  flow: () => Promise<Flow>;
  machine: () => Promise<Machine>;
};
