import { Node } from "../nodes/Node.js";

export type NodeGenerationFinished = {
  id: string;
  type: "NodeGenerationFinished";
  node: Node;
};
