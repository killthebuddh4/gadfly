import { Process } from "./Process.js";
import { Signal } from "../circuit/Signal.js";

export type Patch = (args: {
  signal: Signal;
  process: Process;
}) => Promise<void>;
