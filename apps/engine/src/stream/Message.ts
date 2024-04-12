import { Address } from "./Address.js";

export type Message = {
  id: string;
  parent: Message | null;
  trace: Address[];
  source: Address;
  destination: Address;
  payload: unknown;
};
