import { Address } from "./Address.js";

export type Signal = {
  id: string;
  sequence: Address;
  stimuli: Signal[];
  text: string;
};
