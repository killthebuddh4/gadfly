import { Agent } from "./Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Arbiter = {
  agent: Agent;
  onMessageFromAntagonist: MessageHandler;
  onMessageFromProtagonist: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
