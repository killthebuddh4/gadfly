import { openai } from "./openai.js";

export type ChatMessage = Parameters<
  typeof openai.chat.completions.create
>[0]["messages"][number];
