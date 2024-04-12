import { Stream } from "stream";
import { Prompt } from "./Prompt.js";

export type Neuron = {
  stream: Stream;
  prompt: Prompt;
};
