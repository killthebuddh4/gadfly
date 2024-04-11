import { Address } from "../address/Address.js";
import { Handler } from "../message/Handler.js";
import { Message } from "../message/Message.js";

export type Node = {
  address: Address;
  inbox: Message[];
  outbox: Message[];
  receive: Handler;
  emit: Handler;
};
