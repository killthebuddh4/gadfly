import { Agent } from "../primitives/agent/Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Protagonist = {
  agent: Agent;
  onMessageFromAntagonist: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
