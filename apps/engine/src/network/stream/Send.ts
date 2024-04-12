import { Stream } from "./Stream.js";
import { Message } from "../message/Message.js";

export type Send = (args: {
  stream: Stream;
  message: Message;
}) => Promise<void>;
