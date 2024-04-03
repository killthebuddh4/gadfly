import { Node } from "../nodes/Node.js";

export type NodeGenerationStarted = {
  type: "NodeGenerationStarted";
  id: string;
  parent: Node | null;
};
