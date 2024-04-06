import { Message } from "./Message.js";

export type Selector = ({ message }: { message: Message }) => Promise<boolean>;
