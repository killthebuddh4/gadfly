import { prisma } from "../lib/prisma.js";

export const createNetwork = async ({
  description,
}: {
  description: string;
}) => {
  const network = await prisma.network.create({ data: {} });

  const daemon = await prisma.daemon.create({
    include: {
      computer: true,
    },
    data: {
      network: {
        connect: {
          id: network.id,
        },
      },
      computer: {
        create: {
          network: {
            connect: {
              id: network.id,
            },
          },
          description: {
            create: {
              value: {
                create: {
                  value: description,
                },
              },
            },
          },
        },
      },
    },
  });

  return { network, daemon };
};
