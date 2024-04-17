import { Address } from "./Address.js";

export type Signal = {
  id: string;
  log: Address;
  stimuli: Signal[];
  text: string;
};
