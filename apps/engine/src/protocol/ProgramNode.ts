import { SyntheticNode } from "./SyntheticNode.js";
import { ContextNode } from "./ContextNode.js";
import { AnalysisNode } from "./AnalysisNode.js";

export type ProgramNode =
  | { type: "analysis"; value: AnalysisNode }
  | { type: "context"; value: ContextNode }
  | { type: "synthetic"; value: SyntheticNode };
