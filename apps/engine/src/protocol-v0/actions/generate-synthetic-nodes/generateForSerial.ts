import { Analysis } from "../../nodes/Analysis.js";
import { Synthetic } from "../../nodes/Synthetic.js";
import { v4 as uuidv4 } from "uuid";
import { openai } from "../../../lib/openai/openai.js";
import { generateForSerialMessages } from "./generateForSerialMessages.js";
import { generateForSerialTools } from "./generateForSerialTools.js";
import { logger } from "../../../lib/openai/logger.js";
import { z } from "zod";
import { zJsonString } from "@repo/core/zJsonString.js";

export const generateForSerial = async ({
  parent,
}: {
  parent: Analysis;
}): Promise<Synthetic[]> => {
  const problem = parent.parent.problem;

  const messages = generateForSerialMessages({ problem });
  const tools = generateForSerialTools;

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    max_tokens: 1000,
    messages,
    tools,
  });

  logger("GENERATE FOR SERIAL", response.choices[0]);

  const toolCalls = response.choices[0].message.tool_calls;

  if (toolCalls === undefined) {
    throw new Error("No tool calls in OpenAI chat completions response!");
  }

  const zArguments = zJsonString.pipe(
    z.object({
      rootProblem: z.string(),
      subProblems: z.array(z.string()),
    }),
  );

  const list = zArguments.parse(toolCalls[0].function.arguments);

  return list.subProblems.map((problem) => {
    return {
      id: uuidv4(),
      type: "Synthetic",
      parent,
      children: [],
      problem,
    };
  });
};
