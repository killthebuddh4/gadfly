import { Simulation } from "./Simulation.js";
import { Generation } from "./Generation.js";

export type Reduce = (args: { simulation: Simulation }) => Promise<Generation>;
