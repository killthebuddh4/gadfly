import { Analysis } from "../../nodes/Analysis.js";
import { Context } from "../../nodes/Context.js";
import { v4 as uuidv4 } from "uuid";

export const generateForParallel = async ({
  parent,
}: {
  parent: Analysis;
}): Promise<Context> => {
  const problem = parent.parent.problem;

  return {
    id: uuidv4(),
    type: "Context",
    parent,
    children: null,
  };
};
