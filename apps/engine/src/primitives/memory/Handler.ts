import { Message } from "../memory/Message.js";

export type Handler = (args: { message: Message }) => Promise<void>;
