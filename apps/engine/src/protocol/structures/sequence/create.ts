import { z } from "zod";
import { create as graphRootCreate } from "../../primitives/graph/create.js";
import { zCreateRootBody as graphCreateFirstBody } from "../../primitives/graph/api/schemas.js";

export const create = async (args: z.infer<typeof graphCreateFirstBody>) => {
  const graph = await graphRootCreate(args);

  return { sequence: graph };
};
