import { Controller } from "./Controller.js";
import { Manager } from "./Manager.js";

export type Supervisor = {
  manager: Manager;
  controller: Controller;
};
