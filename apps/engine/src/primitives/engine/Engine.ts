import { Process } from "../process/Process.js";

export type Engine<Input, Output> = {
  process: Process;
  run: (args: { input: Input }) => Promise<Output>;
};
