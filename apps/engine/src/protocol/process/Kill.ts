import { Process } from "./Process.js";

export type Kill = (args: { process: Process }) => Promise<void>;
