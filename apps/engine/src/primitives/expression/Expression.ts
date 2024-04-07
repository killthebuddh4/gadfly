import { Supervisor } from "../supervisor/Supervisor.js";

export type Expression = {
  supervisor: Supervisor;
  expand: () => Promise<void>;
  evaluate: () => Promise<void>;
  reduce: () => Promise<void>;
  return: () => Promise<void>;
};
