import { prisma } from "../lib/prisma.js";

export const createNetwork = async ({
  description,
}: {
  description: string;
}) => {
  const network = await prisma.network.create({ data: {} });

  return { network };
};
