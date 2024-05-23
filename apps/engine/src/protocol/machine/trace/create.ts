import { z } from "zod";
import { create as sequenceCreate } from "../../structures/sequence/create.js";
import { create as pointerCreate } from "../../primitives/pointer/create.js";
import { zCreateRootBody as zCreatePointerBody } from "../../primitives/pointer/api/schemas.js";
import { zCreateRootBody as zCreateSequenceBody } from "../../structures/sequence/api/schemas.js";

export const create = async (args: {
  machineId: string;
  pointer: z.infer<typeof zCreatePointerBody>;
  sequence: z.infer<typeof zCreateSequenceBody>;
}) => {
  const sequence = await sequenceCreate(args.sequence);
  const pointer = await pointerCreate(args.pointer);

  return { trace: sequence, pointer };
};
