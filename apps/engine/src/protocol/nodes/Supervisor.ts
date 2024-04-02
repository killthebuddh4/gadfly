import { Node } from "./Node.js";

export type Supervisor = {
  parent: Supervisor | null;
  children: Supervisor[];
  node: Node;
};
