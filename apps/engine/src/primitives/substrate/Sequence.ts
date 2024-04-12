import { Address } from "./Address.js";
import { Message } from "./Message.js";

export type Sequence = {
  address: Address;
  messages: Message[];

  read: () => Promise<Message[]>;
  append: (args: { message: Message }) => Promise<void>;

  proxy: {
    forward: (args: { sequence: Sequence }) => Promise<{
      ignore: () => Promise<void>;
    }>;

    reverse: (args: { sequence: Sequence }) => Promise<{
      ignore: () => Promise<void>;
    }>;
  };
};
