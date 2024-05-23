import { read as iteratorsRead } from "../../../structures/sequence/iterators/read.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const iterators = await iteratorsRead({ graphId });

  return { signals: iterators };
};
