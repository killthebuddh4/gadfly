import { Address } from "./Address.js";
import { Message } from "./Message.js";
import { Handler } from "./Handler.js";

export type Stream = {
  address: Address;
  history: Message[];
  send: Handler;
  listeners: Array<{ id: string; handler: Handler }>;
  listen: (args: { handler: Handler }) => Promise<{
    ignore: () => Promise<void>;
  }>;
};
