import { Message } from "../message/Message.js";

export type Signal = {
  type: "init" | "patch" | "kill" | "value" | "query" | "error";
  message: Message;
};
