import { Synthetic } from "../../nodes/Synthetic.js";
import { openai } from "../../../lib/openai/openai.js";
import { selectTechniqueMessages } from "./selectTechniqueMessages.js";
import { selectTechniqueCallTools } from "./selectTechniqueCallTools.js";
import { selectTechniqueCallMessages } from "./selectTechniqueCallMessages.js";
import { z } from "zod";

export const selectTechnique = async ({
  synthetic,
}: {
  synthetic: Synthetic;
}) => {
  const messages = selectTechniqueMessages({ problem: synthetic.problem });

  const reasoningResponse = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    max_tokens: 256,
    messages,
  });

  const reasoning = reasoningResponse.choices[0].message.content;

  if (reasoning === null) {
    throw new Error("No reasoning in OpenAI chat completions response!");
  }

  console.log("SELECT TECHNIQUE REASONING", reasoning);

  const callTechniqueMessages = selectTechniqueCallMessages({ reasoning });
  const callTechniqueTools = selectTechniqueCallTools;

  const callResponse = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    max_tokens: 100,
    messages: callTechniqueMessages,
    tools: callTechniqueTools,
  });

  const toolCalls = callResponse.choices[0].message.tool_calls;

  if (toolCalls === undefined) {
    throw new Error("No tool calls in OpenAI chat completions response!");
  }

  const technique = toolCalls[0].function.name;

  console.log("SELECT TECHNIQUE", technique);

  const zTechniqes = z.enum(["SWITCH", "SERIAL", "PARALLEL"]);

  return zTechniqes.parse(technique);
};
