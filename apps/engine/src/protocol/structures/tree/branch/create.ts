import { z } from "zod";
import { zCreateBranchBody } from "../api/schemas.js";
import { create as nodeRootCreate } from "../../../primitives/node/create.js";

export const create = async (args: z.infer<typeof zCreateBranchBody>) => {
  const node = await nodeRootCreate(args);

  return { branch: node };
};
