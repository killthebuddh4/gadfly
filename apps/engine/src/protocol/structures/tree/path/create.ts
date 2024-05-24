import { z } from "zod";
import { zCreatePathBody } from "../api/schemas.js";
import { create as edgeRootCreate } from "../../../primitives/edge/create.js";

export const create = async (args: z.infer<typeof zCreatePathBody>) => {
  const edge = await edgeRootCreate(args);

  return { path: edge };
};
