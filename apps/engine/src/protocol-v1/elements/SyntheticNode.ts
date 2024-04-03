import { AnalyticNode } from "./AnalyticNode.js";
import { Controller } from "./Controller.js";
import { Manager } from "./Manager.js";
import { Supervisor } from "./Supervisor.js";

export type SyntheticNode = {
  id: string;
  type: "synthetic";
  parent: AnalyticNode | null;
  children: AnalyticNode[];
  manager: Manager;
  controller: Controller;
  supervisor: Supervisor;
};
