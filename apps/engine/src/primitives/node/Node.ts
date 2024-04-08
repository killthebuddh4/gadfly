import { Network } from "../network/Network.js";
import { Message } from "../message/Message.js";
import { Address } from "../address/Address.js";

export type Node = {
  address: Address;
  network: Network;
  messages: Message[];
  receive: (args: { message: Message }) => Promise<void>;
};
