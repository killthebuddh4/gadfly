import { Process } from "./Process.js";
import { Signal } from "../primitives/Signal.js";

export type Patch = (args: {
  signal: Signal;
  process: Process;
}) => Promise<void>;
