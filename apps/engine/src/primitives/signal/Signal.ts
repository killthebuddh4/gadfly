import { Message } from "../message/Message.js";

export type Signal = {
  type: "spawn" | "nudge" | "kill" | "value" | "query" | "error";
  message: Message;
};
