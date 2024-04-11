import { Process } from "./Process.js";

export type Exec = (args: { process: Process }) => Promise<void>;
