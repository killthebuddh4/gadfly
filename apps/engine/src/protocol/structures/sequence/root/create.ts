import { z } from "zod";
import { create as graphRootCreate } from "../../../primitives/graph/root/create.js";
import { zCreateRootBody as graphCreateRootBody } from "../../../primitives/graph/schemas.js";

export const create = async (args: {
  graph: z.infer<typeof graphCreateRootBody>;
}) => {
  const graph = await graphRootCreate(args.graph);

  return { sequence: graph };
};
