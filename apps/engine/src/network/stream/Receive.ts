import { Stream } from "./Stream.js";
import { Message } from "../message/Message.js";

export type Receive = (args: {
  stream: Stream;
  message: Message;
}) => Promise<void>;
