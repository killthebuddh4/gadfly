import { Supervisor } from "./Supervisor.js";
import { Controller } from "./Controller.js";

export type Manager = {
  supervisor: Supervisor;
  controller: Controller;
};
