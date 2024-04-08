import { Address } from "../address/Address.js";

export type Message = {
  id: string;
  parent: Message | null;
  trace: Address[];
  source: string;
  destination: string;
  text: string;
};
