import { createNetwork } from "./createNetwork.js";
import { createSestinaNeuron } from "./createSestinaNeuron.js";
import { createMemory } from "./createMemory.js";

export const run = async ({ directions }: { directions: string }) => {
  const network = await createNetwork();
  const memory = await createMemory({ network });
  const neuron = await createSestinaNeuron({ memory });
};
