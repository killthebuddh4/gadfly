import { create as edgeCreate } from "../../../primitives/edge/create.js";

export const create = async ({
  graph_id,
  from_id,
  to_id,
  type_id,
  value_id,
}: {
  graph_id: string;
  from_id: string;
  to_id: string;
  type_id: string;
  value_id: string;
}) => {
  const edge = await edgeCreate({
    graph_id,
    from_id,
    to_id,
    type_id,
    value_id,
  });

  return edge;
};
