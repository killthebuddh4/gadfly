import { Manager } from "./Manager.js";
import { Supervisor } from "./Supervisor.js";

export type Controller = {
  manager: Manager;
  supervisor: Supervisor;
};
