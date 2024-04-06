import { Agent } from "./Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Supervisor = {
  agent: Agent;
  onNewMessage: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
