import { Memory } from "../memory/Memory.js";
import { Handler } from "../memory/Handler.js";
import { Prompt } from "./Prompt.js";

export type Neuron = {
  stream: Memory;
  prompt: Prompt;
  listen: (args: { handler: Handler }) => Promise<{
    ignore: () => Promise<void>;
  }>;
};
