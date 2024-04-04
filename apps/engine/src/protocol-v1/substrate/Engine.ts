import { Agent } from "./Agent.js";
import { Message } from "./Message.js";

export type Engine = {
  agents: Agent[];
  exec: ({ message }: { message: Message }) => Promise<void>;
};
