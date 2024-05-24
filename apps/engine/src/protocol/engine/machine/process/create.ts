import { z } from "zod";
import { create as graphRootCreate } from "../../../primitives/graph/create.js";
import { zCreateRootBody as graphCreateInitialBody } from "../../../primitives/graph/api/schemas.js";

export const create = async (args: z.infer<typeof graphCreateInitialBody>) => {
  const graph = await graphRootCreate(args);

  return { process: graph };
};
