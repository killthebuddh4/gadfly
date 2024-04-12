import { Address } from "./Address.js";
import { Signal } from "../circuit/Signal.js";

export type Message = {
  id: string;
  parent: Message | null;
  trace: Address[];
  source: Address;
  destination: Address;
  signal: Signal;
};
