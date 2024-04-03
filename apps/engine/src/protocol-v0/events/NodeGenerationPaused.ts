import { Node } from "../nodes/Node.js";

export type NodeGenerationPaused = {
  id: string;
  type: "NodeGenerationPaused";
  node: Node;
};
