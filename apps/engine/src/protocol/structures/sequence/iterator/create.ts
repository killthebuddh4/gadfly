import { z } from "zod";
import { zCreateRootBody as edgeCreateRootBody } from "../../../primitives/edge/api/schemas.js";
import { create as edgeRootCreate } from "../../../primitives/edge/create.js";

export const create = async (args: {
  edge: z.infer<typeof edgeCreateRootBody>;
}) => {
  const edge = await edgeRootCreate(args.edge);

  return { iterator: edge };
};
