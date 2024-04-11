import { Process } from "./Process.js";

export type Abort = (args: { process: Process }) => Promise<void>;
