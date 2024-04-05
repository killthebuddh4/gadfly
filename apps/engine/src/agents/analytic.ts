import { Agent } from "../primitives/agent/Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Analytic = {
  agent: Agent;
  onMessageFromParent: MessageHandler;
  onMessageFromChild: MessageHandler;
  onMessageFromExecutor: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
