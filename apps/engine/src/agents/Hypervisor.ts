import { Agent } from "../primitives/agent/Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Hypervisor = {
  agent: Agent;
  onNewMessage: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
