import { Simulation } from "./Simulation.js";
import { Generation } from "./Generation.js";

export type Map = (args: { simulation: Simulation }) => Promise<Generation>;
