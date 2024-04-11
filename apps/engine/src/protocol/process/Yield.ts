import { Process } from "./Process.js";

export type Yield = (args: { process: Process }) => Promise<void>;
