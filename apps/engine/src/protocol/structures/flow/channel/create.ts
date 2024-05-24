import { z } from "zod";
import { zCreateChannelBody } from "../api/schemas.js";
import { create as edgeRootCreate } from "../../../primitives/edge/create.js";

export const create = async (args: z.infer<typeof zCreateChannelBody>) => {
  const edge = await edgeRootCreate(args);

  return { channel: edge };
};
