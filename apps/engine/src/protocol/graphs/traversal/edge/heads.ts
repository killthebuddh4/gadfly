import { Node } from "@prisma/client";
import { prisma } from "../../../../lib/prisma.js";

export const heads = async (args: {
  ids: string[];
  found: Node[];
}): Promise<Node[]> => {
  const nodes = await prisma.node.findMany({
    include: {
      downstream: true,
    },
    where: {
      upstream: {
        some: {
          id: {
            in: args.ids,
          },
        },
      },
    },
  });

  const found = nodes.filter((node) => {
    return node.downstream.length === 0;
  });

  const notHeads = nodes.filter((node) => {
    return node.downstream.length > 0;
  });

  if (notHeads.length === 0) {
    return [...args.found, ...found];
  } else {
    return heads({
      ids: nodes.flatMap((node) => node.downstream.map((edge) => edge.id)),
      found: [...args.found, ...found],
    });
  }
};
