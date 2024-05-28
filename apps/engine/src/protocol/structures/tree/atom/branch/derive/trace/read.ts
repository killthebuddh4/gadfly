import { read as readBranches } from "../../../branches/read.js";
import { read as readParent } from "../parent/read.js";

export const read = async ({
  id,
  graph_id,
}: {
  id: string;
  graph_id: string;
}) => {
  const branches = await readBranches({ id: graph_id });

  let next = branches.find((branch) => branch.id === id) || null;

  if (next === null) {
    throw new Error(`Branch not found: ${id}`);
  }

  const trace: Array<typeof next> = [];

  while (next !== null) {
    trace.push(next);
    next = await readParent(next);
  }

  return trace;
};
