import { z } from "zod";
import { zCreateRootBody as zGraphCreateRootBody } from "../../../primitives/graph/api/schemas.js";

export const zCreateRootBody = z.object({
  graph: zGraphCreateRootBody,
});
