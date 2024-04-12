import { Address } from "./Address.js";
import { Signal } from "./Signal.js";

export type Message = {
  id: string;
  trace: Array<{
    source: Address;
    message: Message;
  }>;
  signal: Signal;
};
