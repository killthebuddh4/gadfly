import { Signal } from "../primitives/Signal.js";
import { Process } from "./Process.js";

export type Spawn = (args: { signal: Signal }) => Promise<Process>;
