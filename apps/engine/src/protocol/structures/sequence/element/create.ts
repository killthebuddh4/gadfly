import { z } from "zod";
import { zCreateElementBody } from "../api/schemas.js";
import { create as nodeFirstCreate } from "../../../primitives/node/create.js";

export const create = async (args: z.infer<typeof zCreateElementBody>) => {
  const node = await nodeFirstCreate(args);

  return { element: node };
};
