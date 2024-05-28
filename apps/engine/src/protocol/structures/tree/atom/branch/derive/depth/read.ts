import { read as traceRead } from "../trace/read.js";

export const read = async ({
  id,
  graph_id,
}: {
  id: string;
  graph_id: string;
}) => {
  const trace = await traceRead({ id, graph_id });

  return trace.length;
};
