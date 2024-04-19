import { z } from "zod";

const zAddress = z.object({ address: z.string() });

export const zReferences = z.object({
  spec: z.object({
    name: zAddress,
    description: zAddress,
    inputs: z.array(zAddress),
    output: zAddress,
    constraints: z.array(zAddress),
  }),
  inputs: z.array(zAddress),
  output: zAddress,
  feedback: zAddress,
  history: z.array(
    z.object({
      spec: z.object({
        name: z.string(),
        description: z.string(),
        inputs: z.array(z.object({ log: zAddress, id: z.string() })),
        output: z.string(),
        constraints: z.array(z.object({ log: zAddress, id: z.string() })),
      }),
      inputs: z.array(z.object({ log: zAddress, id: z.string() })),
      output: z.string(),
      feedback: z.string(),
    }),
  ),
});
