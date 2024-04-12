import { Address } from "../address/Address.js";
import { Message } from "../message/Message.js";
import { Prompt } from "./Prompt.js";

export type Stream = {
  address: Address;
  prompt: Prompt;
  history: Message[];
};
