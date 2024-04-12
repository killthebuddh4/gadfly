import { Simulation } from "../simulation/Simulation.js";
import { Expression } from "../expression/Expression.js";

export type Compiler = {
  source: string;
  tree: Expression | null;
  simulation: Simulation;
};
