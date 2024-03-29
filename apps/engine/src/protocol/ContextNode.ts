import { SyntheticNode } from "./SyntheticNode.js";

export type ContextNode = {
  source: SyntheticNode;
  target: SyntheticNode;
  reasoning: string;
};
