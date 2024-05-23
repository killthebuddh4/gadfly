import { z } from "zod";
import { create as sequenceCreate } from "../../structures/sequence/create.js";
import { zCreateRootBody } from "../../structures/sequence/api/schemas.js";

export const create = async (args: z.infer<typeof zCreateRootBody>) => {
  const sequence = await sequenceCreate(args);

  return { trace: sequence };
};
