import { Address } from "./Address.js";
import { Message } from "./Message.js";

export type Stream = {
  address: Address;
  history: Message[];
};
