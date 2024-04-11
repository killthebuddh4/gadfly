import { Process } from "./Process.js";

export type Query = (args: { process: Process }) => Promise<void>;
