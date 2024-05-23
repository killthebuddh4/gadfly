import { z } from "zod";
import { zCreateIteratorBody } from "../../../structures/sequence/api/schemas.js";
import { create as iteratorCreate } from "../../../structures/sequence/iterator/create.js";

export const create = async (args: z.infer<typeof zCreateIteratorBody>) => {
  const iterator = await iteratorCreate(args);

  return { signal: iterator };
};
