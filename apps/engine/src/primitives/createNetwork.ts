import { prisma } from "../lib/prisma.js";

export const createNetwork = async ({ name }: { name: string }) => {
  const network = await prisma.network.create({
    data: { name },
  });

  return network;
};
