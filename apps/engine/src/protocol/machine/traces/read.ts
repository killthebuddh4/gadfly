import { search } from "../../primitives/graph/search.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const graphs = await search();

  // TODO How do I implement this?
  const isTrace = () => false;

  return { traces: graphs.filter(isTrace) };
};
