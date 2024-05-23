import { z } from "zod";
import { zCreateRootBody as zGraphCreateRootBody } from "../../../primitives/graph/api/schemas.js";
import { zCreateRootBody as zEdge } from "../../../primitives/edge/api/schemas.js";

export const zCreateRootBody = z.object({
  graph: zGraphCreateRootBody,
});

export const zCreateIteratorBody = z.object({
  edge: zEdge,
});
