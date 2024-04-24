import { prisma } from "../lib/prisma.js";

export const createActor = async ({ network }: { network: { id: string } }) => {
  const actor = await prisma.actor.create({
    data: { network: { connect: { id: network.id } } },
  });

  return actor;
};
