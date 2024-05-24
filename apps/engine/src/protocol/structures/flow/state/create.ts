import { z } from "zod";
import { zCreateStateBody } from "../api/schemas.js";
import { create as nodeRootCreate } from "../../../primitives/node/create.js";

export const create = async (args: z.infer<typeof zCreateStateBody>) => {
  const node = await nodeRootCreate(args);

  return { state: node };
};
