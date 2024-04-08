import { Actor } from "../actor/Actor.js";
import { Supervisor } from "../supervisor/Supervisor.js";
import { Expression } from "../expression/Expression.js";
import { Hypervisor } from "../hypervisor/Hypervisor.js";

export type Process = {
  actor: Actor;
  supervisor: Supervisor;
  expression: Expression;
  hypervisor: Hypervisor;
};
