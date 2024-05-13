import { Edge } from "@prisma/client";
import { prisma } from "../../../../lib/prisma.js";

export const heads = async ({ id }: { id: string }) => {
  return _heads({
    ids: [id],
    found: [],
  });
};

const _heads = async (args: {
  ids: string[];
  found: Edge[];
}): Promise<Edge[]> => {
  const edges = await prisma.edge.findMany({
    include: {
      to: true,
    },
    where: {
      from: {
        id: {
          in: args.ids,
        },
      },
    },
  });

  const found = edges.filter((edge) => {
    return edge.to === null;
  });

  const notHeads = edges.filter((edge) => {
    return edge.to !== null;
  }) as { to: { id: string } }[];

  if (notHeads.length === 0) {
    return [...args.found, ...found];
  } else {
    return _heads({
      ids: notHeads.map((edge) => edge.to.id),
      found: [...args.found, ...found],
    });
  }
};
