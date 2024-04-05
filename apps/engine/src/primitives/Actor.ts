import { Network } from "./Network.js";
import { Message } from "./Message.js";

export type Actor = {
  id: string;
  network: Network;
  messages: Message[];
  receive: ({ message }: { message: Message }) => Promise<void>;
};
