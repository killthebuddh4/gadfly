import { Node } from "../nodes/Node.js";

export type NodeGenerationFailed = {
  type: "NodeGenerationFailed";
  id: string;
  parent: Node | null;
};
