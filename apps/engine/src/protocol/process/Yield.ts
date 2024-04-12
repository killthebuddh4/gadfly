import { Signal } from "../primitives/Signal.js";
import { Process } from "./Process.js";

export type Yield = (args: {
  signal: Signal;
  process: Process;
}) => Promise<void>;
