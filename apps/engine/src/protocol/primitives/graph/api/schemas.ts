import { z } from "zod";
import { schemas as apiSchemas } from "../../api/schemas.js";

const zCreateGraph = z.object({
  body: apiSchemas.zGraph.omit({
    id: true,
    created_at: true,
    updated_at: true,
  }),
  data: apiSchemas.zGraph,
});

const zReadGraph = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zGraph,
});

const zReadNodes = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: z.array(apiSchemas.zNode),
});

const zReadEdges = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: z.array(apiSchemas.zEdge),
});

const zSearch = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: z.array(apiSchemas.zPointer),
});

const zReadChildren = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: z.array(apiSchemas.zPointer),
});

const zReadParents = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: z.array(apiSchemas.zPointer),
});

const zReadType = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zType,
});

const zReadValue = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zValue,
});

export const schemas = {
  zCreateGraph,
  zReadGraph,
  zReadNodes,
  zReadEdges,
  zSearch,
  zReadChildren,
  zReadParents,
  zReadType,
  zReadValue,
};
