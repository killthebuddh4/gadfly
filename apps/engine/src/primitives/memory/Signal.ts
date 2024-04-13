import { Sequence } from "./Sequence.js";

export type Signal = {
  id: string;
  sequence: Sequence;
  inputs: Signal[];
  text: string;
};
