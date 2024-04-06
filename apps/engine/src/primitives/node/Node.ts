import { Network } from "../network/Network.js";
import { Message } from "../message/Message.js";

export type Node = {
  address: string;
  network: Network;
  messages: Message[];
  receive: (args: { message: Message }) => Promise<void>;
};
