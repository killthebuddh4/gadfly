import { Message } from "./Message.js";

export type Handler = (args: { message: Message }) => Promise<Message>;
