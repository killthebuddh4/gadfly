import { z } from "zod";

export const zCreateRootBody = z.object({
  graph: z.string().uuid(),
  type: z.string().uuid(),
  value: z.string().uuid(),
});

export const zCreateRootData = z.object({
  id: z.string().uuid(),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

export const zReadRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadRootData = z.object({
  id: z.string().uuid(),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

export const zInterpretRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadGraphParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretGraphParams = z.object({
  id: z.string().uuid(),
});

export const zReadValueParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretValueParams = z.object({
  id: z.string().uuid(),
});

export const zReadUpstreamParams = z.object({
  id: z.string().uuid(),
});

export const zReadUpstreamData = z.array(
  z.object({
    id: z.string().uuid(),
  }),
);

export const zInterpretUpstreamParams = z.object({
  id: z.string().uuid(),
});

export const zReadDownstreamParams = z.object({
  id: z.string().uuid(),
});

export const zReadDownstreamData = z.array(
  z.object({
    id: z.string().uuid(),
  }),
);

export const zInterpretDownstreamParams = z.object({
  id: z.string().uuid(),
});

export const zReadParentsParams = z.object({
  id: z.string().uuid(),
});

export const zReadParentsData = z.array(z.object({ id: z.string().uuid() }));

export const zReadChildrenParams = z.object({
  id: z.string().uuid(),
});

export const zReadChildrenData = z.array(z.object({ id: z.string().uuid() }));
