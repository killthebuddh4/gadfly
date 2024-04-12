import { Message } from "../message/Message.js";
import { Stream } from "./Stream.js";

export type Generate = (args: { stream: Stream }) => Promise<Message>;
