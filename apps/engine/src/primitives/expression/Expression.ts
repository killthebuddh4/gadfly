import { Process } from "../process/Process.js";

export type Expression = {
  process: Process;
  parent: Expression | null;
  children: Expression[];
  expand: () => Promise<void>;
  evaluate: () => Promise<void>;
  reduce: () => Promise<void>;
  return: () => Promise<void>;
};
