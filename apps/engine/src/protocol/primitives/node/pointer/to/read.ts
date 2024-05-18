import { prisma } from "../../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const pointer = await prisma.pointer.findUnique({
    where: {
      id,
    },
  });

  if (pointer === null) {
    throw new Error(`Pointer not found: ${id}`);
  }

  if (pointer.to_value_id !== null) {
    return {
      type: "value",
      id: pointer.to_value_id,
    };
  }

  if (pointer.to_node_id !== null) {
    return {
      type: "node",
      id: pointer.to_node_id,
    };
  }

  if (pointer.to_graph_id !== null) {
    return {
      type: "graph",
      id: pointer.to_graph_id,
    };
  }

  if (pointer.to_edge_id !== null) {
    return {
      type: "edge",
      id: pointer.to_edge_id,
    };
  }

  if (pointer.to_pointer_id !== null) {
    return {
      type: "pointer",
      id: pointer.to_pointer_id,
    };
  }

  throw new Error(`Pointer has no target: ${id}`);
};
