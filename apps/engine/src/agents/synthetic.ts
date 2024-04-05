import { Agent } from "../primitives/agent/Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Synthetic = {
  agent: Agent;
  onMessageFromParent: MessageHandler;
  onMessageFromChild: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
