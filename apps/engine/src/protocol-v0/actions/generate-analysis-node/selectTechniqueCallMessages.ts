import { openai } from "../../../lib/openai/openai.js";

type Message = Parameters<
  typeof openai.chat.completions.create
>[0]["messages"][number];

export const selectTechniqueCallMessages = ({
  reasoning,
}: {
  reasoning: string;
}): Message[] => {
  return [
    {
      role: "system",
      content:
        "Please use the appropriate tool according to the user's suggestion.",
    },
    {
      role: "assistant",
      content: "What technique do you think we should start with?",
    },
    {
      role: "user",
      content: reasoning,
    },
  ];
};
