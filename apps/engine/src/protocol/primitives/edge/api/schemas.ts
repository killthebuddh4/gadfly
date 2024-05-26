import { z } from "zod";
import { schemas as apiSchemas } from "../../api/schemas.js";

const zCreateEdge = z.object({
  body: apiSchemas.zEdge.omit({
    id: true,
    created_at: true,
    updated_at: true,
  }),
  data: apiSchemas.zEdge,
});

const zReadEdge = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zEdge,
});

const zReadFrom = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zNode,
});

const zReadTo = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zNode,
});

const zReadGraph = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zGraph,
});

const zReadType = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zType,
});

const zReadValue = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: apiSchemas.zValue,
});

const zReadParents = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: z.array(apiSchemas.zPointer),
});

const zReadChildren = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: z.array(apiSchemas.zPointer),
});

const zSearch = z.object({
  params: z.object({ id: z.string().uuid() }),
  data: z.array(apiSchemas.zEdge),
});

export const schemas = {
  zCreateEdge,
  zReadEdge,
  zReadFrom,
  zReadTo,
  zReadGraph,
  zReadType,
  zReadValue,
  zReadParents,
  zReadChildren,
  zSearch,
};
