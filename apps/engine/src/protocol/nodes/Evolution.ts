import { Node } from "./Node.js";

export type Evolution = {
  node: Node;
  parent: Evolution | null;
  children: Evolution[];
};
