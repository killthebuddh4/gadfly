import { Controller } from "./Controller.js";
import { Manager } from "./Manager.js";
import { Supervisor } from "./Supervisor.js";
import { SyntheticNode } from "./SyntheticNode.js";

export type AnalyticNode = {
  id: string;
  type: "analytic";
  parent: SyntheticNode;
  children: SyntheticNode[];
  manager: Manager;
  controller: Controller;
  supervisor: Supervisor;
};
