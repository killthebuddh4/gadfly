import { z } from "zod";
import { create as treeRootCreate } from "../../structures/tree/create.js";
import { zCreateRootBody } from "../../structures/tree/api/schemas.js";

export const create = async (args: z.infer<typeof zCreateRootBody>) => {
  const tree = await treeRootCreate(args);

  return { trace: tree };
};
