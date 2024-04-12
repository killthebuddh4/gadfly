import { Address } from "./Address.js";

export type Signal = {
  id: string;
  parent: Signal | null;
  trace: Address[];
  source: Address;
  destination: Address;
  payload: string;
};
