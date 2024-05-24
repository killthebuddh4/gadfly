import { z } from "zod";
import { zCreateIteratorBody } from "../api/schemas.js";
import { create as edgeFirstCreate } from "../../../primitives/edge/create.js";

export const create = async (args: z.infer<typeof zCreateIteratorBody>) => {
  const edge = await edgeFirstCreate(args);

  return { iterator: edge };
};
