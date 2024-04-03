import { Agent } from "./Agent.js";

export type Message = {
  id: string;
  source: Agent;
  destination: Agent;
  text: string;
};
