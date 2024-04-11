import { Message } from "./Message.js";

export type Filter = (args: { message: Message }) => Promise<boolean>;
