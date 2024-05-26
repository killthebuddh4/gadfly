import { z } from "zod";
import { zCreatePhaseBody } from "../api/schemas.js";
import { create as nodeInitialCreate } from "../../../primitives/node/create.js";

export const create = async (args: z.infer<typeof zCreatePhaseBody>) => {
  const node = await nodeInitialCreate(args);

  return { phase: node };
};
