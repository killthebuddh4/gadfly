import { prisma } from "../../../lib/prisma.js";

export const create = async ({
  type_id,
  value_id,
  from,
  to,
}: {
  type_id: string;
  value_id: string;
  from: {
    type: "value" | "node" | "graph" | "edge" | "pointer";
    id: string;
  };
  to: {
    type: "value" | "node" | "graph" | "edge" | "pointer";
    id: string;
  };
}) => {
  return prisma.pointer.create({
    data: {
      type: {
        connect: {
          id: type_id,
        },
      },
      value: {
        connect: {
          id: value_id,
        },
      },
      from_value:
        from.type === "value" ? { connect: { id: from.id } } : undefined,
      from_node:
        from.type === "node" ? { connect: { id: from.id } } : undefined,
      from_graph:
        from.type === "graph" ? { connect: { id: from.id } } : undefined,
      from_edge:
        from.type === "edge" ? { connect: { id: from.id } } : undefined,
      from_pointer:
        from.type === "pointer" ? { connect: { id: from.id } } : undefined,
      to_value: to.type === "value" ? { connect: { id: to.id } } : undefined,
      to_node: to.type === "node" ? { connect: { id: to.id } } : undefined,
      to_graph: to.type === "graph" ? { connect: { id: to.id } } : undefined,
      to_edge: to.type === "edge" ? { connect: { id: to.id } } : undefined,
      to_pointer:
        to.type === "pointer" ? { connect: { id: to.id } } : undefined,
    },
  });
};
