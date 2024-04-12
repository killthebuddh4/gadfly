import { Network } from "./Network.js";
import { Message } from "../stream/Message.js";

export type Whisper = (args: {
  network: Network;
  message: Message;
}) => Promise<void>;
