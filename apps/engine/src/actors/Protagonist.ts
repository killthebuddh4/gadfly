import { Agent } from "./Agent.js";
import { Handler as MessageHandler } from "../primitives/message/Handler.js";

export type Protagonist = {
  agent: Agent;
  onMessageFromAntagonist: MessageHandler;
  onMessageFromEngine: MessageHandler;
};
