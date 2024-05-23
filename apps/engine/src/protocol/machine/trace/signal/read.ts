import { read as iteratorRead } from "../../../structures/sequence/iterator/read.js";

export const read = async ({ id }: { id: string }) => {
  const iterator = await iteratorRead({ id });

  return { signal: iterator };
};
