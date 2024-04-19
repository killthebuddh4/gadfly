import { Signal } from "./Signal.js";
import { z } from "zod";

export const zSignal: z.ZodType<Signal> = z.object({
  id: z.string(),
  log: z.object({ address: z.string() }),
  stimuli: z.lazy(() => zSignal.array()),
  text: z.string(),
});
