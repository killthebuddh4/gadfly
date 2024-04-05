import { Agent } from "../primitives/agent/Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Executor = {
  agent: Agent;
  onMessageFromParent: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
