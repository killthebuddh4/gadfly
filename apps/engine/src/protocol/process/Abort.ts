import { Signal } from "../circuit/Signal.js";
import { Process } from "./Process.js";

export type Abort = (args: {
  process: Process;
  signal: Signal;
}) => Promise<void>;
