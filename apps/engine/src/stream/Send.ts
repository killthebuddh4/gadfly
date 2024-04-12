import { Stream } from "./Stream.js";
import { Message } from "./Message.js";

export type Send = (args: {
  stream: Stream;
  message: Message;
}) => Promise<void>;
