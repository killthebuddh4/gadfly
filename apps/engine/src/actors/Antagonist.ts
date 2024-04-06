import { Agent } from "./Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Antagonist = {
  agent: Agent;
  onMessageFromProtagonist: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
