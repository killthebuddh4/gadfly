import { Edge } from "@prisma/client";
import { prisma } from "../../../../lib/prisma.js";

export const tails = async (args: { ids: string[] }): Promise<Edge[]> => {
  return _tails({
    ids: args.ids,
    found: [],
  });
};

const _tails = async (args: {
  ids: string[];
  found: Edge[];
}): Promise<Edge[]> => {
  const edges = await prisma.edge.findMany({
    include: {
      from: true,
    },
    where: {
      to: {
        id: {
          in: args.ids,
        },
      },
    },
  });

  const found = edges.filter((edge) => {
    return edge.from === null;
  });

  const notTails = edges.filter((edge) => {
    return edge.from !== null;
  }) as { from: { id: string } }[];

  if (notTails.length === 0) {
    return [...args.found, ...found];
  } else {
    return _tails({
      ids: notTails.map((edge) => edge.from.id),
      found: [...args.found, ...found],
    });
  }
};
