import { prisma } from "../../../lib/prisma.js";

export const create = async ({
  type_id,
  value_id,
  from_node_id,
  from_edge_id,
  from_graph_id,
  from_type_id,
  from_value_id,
  from_pointer_id,
  to_node_id,
  to_edge_id,
  to_graph_id,
  to_type_id,
  to_value_id,
  to_pointer_id,
}: {
  type_id: string;
  value_id: string;
  from_node_id: string | null;
  from_edge_id: string | null;
  from_graph_id: string | null;
  from_type_id: string | null;
  from_value_id: string | null;
  from_pointer_id: string | null;
  to_node_id: string | null;
  to_edge_id: string | null;
  to_graph_id: string | null;
  to_type_id: string | null;
  to_value_id: string | null;
  to_pointer_id: string | null;
}) => {
  const pointer = await prisma.pointer.create({
    data: {
      type_id,
      value_id,
      from_node_id,
      from_edge_id,
      from_graph_id,
      from_type_id,
      from_value_id,
      from_pointer_id,
      to_node_id,
      to_edge_id,
      to_graph_id,
      to_type_id,
      to_value_id,
      to_pointer_id,
    },
  });

  return pointer;
};
