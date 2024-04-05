import { Message } from "./Message.js";

export type Handler = ({ message }: { message: Message }) => Promise<void>;
