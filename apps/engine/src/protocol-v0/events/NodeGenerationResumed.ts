import { Node } from "../nodes/Node.js";

export type NodeGenerationResumed = {
  type: "NodeGenerationResumed";
  id: string;
  node: Node;
};
