import { Message } from "./Message.js";

export type Agent = ({
  id,
  goal,
  messages,
  contacts,
}: {
  id: string;
  goal: string;
  messages: Message[];
  contacts: Agent[];
}) => Promise<Agent>;
