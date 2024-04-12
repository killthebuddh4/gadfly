import { Generation } from "./Generation.js";
import { Simulation } from "./Simulation.js";

export type Filter = (args: { simulation: Simulation }) => Promise<Generation>;
