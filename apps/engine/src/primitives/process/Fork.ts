import { Process } from "./Process.js";

export type Fork = (args: { process: Process }) => Promise<Process[]>;
