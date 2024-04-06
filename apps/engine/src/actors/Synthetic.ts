import { Agent } from "./Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Synthetic = {
  agent: Agent;
  onMessageFromParent: MessageHandler;
  onMessageFromChild: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
