import { Process } from "./Process.js";

export type Patch = (args: { process: Process }) => Promise<void>;
