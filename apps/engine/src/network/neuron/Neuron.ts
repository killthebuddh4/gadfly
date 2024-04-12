import { Stream } from "stream";
import { Prompt } from "../stream/Prompt.js";

export type Neuron = {
  stream: Stream;
  prompt: Prompt;
};
