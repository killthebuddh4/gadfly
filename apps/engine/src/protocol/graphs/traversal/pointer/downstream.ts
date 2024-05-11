import { prisma } from "../../../../lib/prisma.js";

export const downstream = async ({ id }: { id: string }) => {
  const pointer = await prisma.pointer.findUnique({
    include: {
      node: true,
      value: true,
      type: true,
      graph: true,
      edge: true,
      operation: true,
    },
    where: {
      id,
    },
  });

  if (pointer === null) {
    throw new Error(`Pointer not found: ${id}`);
  }

  if (pointer.node !== null) {
    return {
      table: "node",
      node: pointer.node,
    };
  }

  if (pointer.value !== null) {
    return {
      table: "value",
      value: pointer.value,
    };
  }

  if (pointer.type !== null) {
    return {
      table: "type",
      type: pointer.type,
    };
  }

  if (pointer.graph !== null) {
    return {
      table: "graph",
      graph: pointer.graph,
    };
  }

  if (pointer.edge !== null) {
    return {
      table: "edge",
      edge: pointer.edge,
    };
  }

  if (pointer.operation !== null) {
    return {
      table: "operation",
      operation: pointer.operation,
    };
  }

  return null;
};
