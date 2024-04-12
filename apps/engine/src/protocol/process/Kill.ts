import { Signal } from "../circuit/Signal.js";
import { Process } from "./Process.js";

export type Kill = (args: {
  process: Process;
  signal: Signal;
}) => Promise<void>;
