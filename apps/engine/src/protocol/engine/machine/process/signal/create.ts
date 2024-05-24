import { z } from "zod";
import { zCreateSignalBody } from "../api/schemas.js";
import { create as edgeInitialCreate } from "../../../../primitives/edge/create.js";

export const create = async (args: z.infer<typeof zCreateSignalBody>) => {
  const edge = await edgeInitialCreate(args);

  return { signal: edge };
};
