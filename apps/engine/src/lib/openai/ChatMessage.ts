import { openai } from "./openai.js";

export type Message = Parameters<
  typeof openai.chat.completions.create
>[0]["messages"][number];
