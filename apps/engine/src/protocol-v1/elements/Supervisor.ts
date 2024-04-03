import { Agent } from "./Agent.js";

export type Supervisor = ({
  sender,
  receiver,
}: {
  sender: Agent;
  receiver: Agent;
}) => Promise<Agent>;
