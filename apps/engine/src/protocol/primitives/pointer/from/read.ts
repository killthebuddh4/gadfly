import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const pointer = await prisma.pointer.findUnique({
    where: {
      id,
    },
  });

  if (pointer === null) {
    throw new Error(`Pointer not found: ${id}`);
  }

  if (pointer.from_value_id !== null) {
    return {
      type: "value",
      id: pointer.from_value_id,
    };
  }

  if (pointer.from_node_id !== null) {
    return {
      type: "node",
      id: pointer.from_node_id,
    };
  }

  if (pointer.from_graph_id !== null) {
    return {
      type: "graph",
      id: pointer.from_graph_id,
    };
  }

  if (pointer.from_edge_id !== null) {
    return {
      type: "edge",
      id: pointer.from_edge_id,
    };
  }

  if (pointer.from_pointer_id !== null) {
    return {
      type: "pointer",
      id: pointer.from_pointer_id,
    };
  }

  throw new Error(`Pointer has no target: ${id}`);
};
