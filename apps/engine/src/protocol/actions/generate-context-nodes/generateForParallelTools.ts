import { openai } from "../../../lib/openai/openai.js";
import { FunctionParameters } from "openai/resources/shared.mjs";

type Tool = {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters?: FunctionParameters;
  };
};

export const selectTechniqueCallTools: Tool[] = [
  {
    type: "function",
    function: {
      name: "sendListOfSubProblems",
      description: "",
      parameters: {
        type: "object",
        properties: {
          rootProblem: {
            type: "string",
            description: "A detailed description of the root problem",
          },
          subProblems: {
            type: "array",
            description:
              "An array of strings where each string is a detailed description of a sub-problem",
          },
        },
        required: ["problems"],
      },
    },
  },
] as const;
