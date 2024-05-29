import { create as nodeCreate } from "../../../../graph/node/create.js";

export const create = async ({
  graph_id,
  type_id,
  value_id,
}: {
  graph_id: string;
  value_id: string;
  type_id: string;
}) => {
  const node = await nodeCreate({
    graph_id,
    type_id,
    value_id,
  });

  return node;
};
