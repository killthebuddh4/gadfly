import { Network } from "./Network.js";
import { Message } from "../stream/Message.js";

export type Publish = (args: {
  network: Network;
  message: Message;
}) => Promise<void>;
