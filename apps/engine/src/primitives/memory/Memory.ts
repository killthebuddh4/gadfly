import { Address } from "./Address.js";
import { Message } from "./Message.js";
import { Handler } from "./Handler.js";

export type Memory = {
  address: Address;
  history: Message[];
  write: Handler;
  listen: (args: { memory: Memory }) => Promise<{
    ignore: () => Promise<void>;
  }>;
};
