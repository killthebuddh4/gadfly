import { Node } from "../nodes/Node.js";

export type NodeGenerationCancelled = {
  type: "NodeGenerationCancelled";
  id: string;
  node: Node;
};
