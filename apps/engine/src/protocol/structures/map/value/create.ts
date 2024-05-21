import { z } from "zod";
import { zCreateRootBody as nodeCreateRootBody } from "../../../primitives/node/schemas.js";
import { create as nodeRootCreate } from "../../../primitives/node/create.js";

export const create = async (args: {
  node: z.infer<typeof nodeCreateRootBody>;
}) => {
  const node = await nodeRootCreate(args.node);

  return { value: node };
};
