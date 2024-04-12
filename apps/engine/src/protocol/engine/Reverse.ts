import { Engine } from "./Engine.js";
import { Trajectory } from "./Trajectory.js";

export type Reverse = (args: { engine: Engine }) => Promise<Trajectory>;
