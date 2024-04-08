import { Actor } from "../actor/Actor.js";
import { Message } from "../message/Message.js";

export type Sequence = {
  actor: Actor;
  history: Message[];
  generate: () => Promise<Message>;
};
