import { Network } from "../network/Network.js";
import { Message } from "../message/Message.js";

export type Actor = {
  id: string;
  network: Network;
  messages: Message[];
  receive: ({ message }: { message: Message }) => Promise<void>;
};
