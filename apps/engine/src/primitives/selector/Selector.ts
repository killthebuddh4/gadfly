import { Message } from "../message/Message.js";

export type Selector = ({ message }: { message: Message }) => Promise<boolean>;
