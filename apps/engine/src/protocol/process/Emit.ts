import { Process } from "./Process.js";

export type Emit = (args: { process: Process }) => Promise<void>;
