import { Node } from "./nodes/Node.js";

export type Generation = {
  parent: Generation | null;
  node: Node;
  feedback: string;
  patch: string;
  children: Generation[];
};
