import { Address } from "../address/Address.js";
import { Message } from "../message/Message.js";

export type Stream = {
  address: Address;
  history: Message[];
};
