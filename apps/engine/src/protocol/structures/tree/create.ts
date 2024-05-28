import { create as graphCreate } from "../../primitives/graph/create.js";

export const create = async ({
  type_id,
  value_id,
}: {
  type_id: string;
  value_id: string;
}) => {
  const graph = await graphCreate({ type_id, value_id });

  return graph;
};
