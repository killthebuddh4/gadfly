import { Node } from "@prisma/client";
import { prisma } from "../../../../lib/prisma.js";

export const tails = async (args: {
  ids: string[];
  found: Node[];
}): Promise<Node[]> => {
  const nodes = await prisma.node.findMany({
    include: {
      upstream: true,
    },
    where: {
      downstream: {
        some: {
          id: {
            in: args.ids,
          },
        },
      },
    },
  });

  const found = nodes.filter((node) => {
    return node.upstream.length === 0;
  });

  const notTails = nodes.filter((node) => {
    return node.upstream.length > 0;
  });

  if (notTails.length === 0) {
    return [...args.found, ...found];
  } else {
    return tails({
      ids: nodes.flatMap((node) => node.upstream.map((edge) => edge.id)),
      found: [...args.found, ...found],
    });
  }
};
