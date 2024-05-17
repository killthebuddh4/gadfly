import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  value,
  from,
  type,
  to,
}: {
  value: string;
  from: string;
  type: string;
  to:
    | {
        type: "value";
        id: string;
      }
    | {
        type: "node";
        id: string;
      }
    | {
        type: "graph";
        id: string;
      }
    | {
        type: "edge";
        id: string;
      }
    | {
        type: "pointer";
        id: string;
      };
}) => {
  return prisma.pointer.create({
    data: {
      from: {
        connect: {
          id: from,
        },
      },
      type: {
        connect: {
          id: type,
        },
      },
      value: {
        connect: {
          id: value,
        },
      },
      to_value: to.type === "value" ? { connect: { id: to.id } } : undefined,
      to_node: to.type === "node" ? { connect: { id: to.id } } : undefined,
      to_graph: to.type === "graph" ? { connect: { id: to.id } } : undefined,
      to_edge: to.type === "edge" ? { connect: { id: to.id } } : undefined,
      to_pointer:
        to.type === "pointer" ? { connect: { id: to.id } } : undefined,
    },
  });
};
