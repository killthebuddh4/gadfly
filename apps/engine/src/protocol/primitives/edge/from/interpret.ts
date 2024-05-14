import { read } from "./read.js";

export const interpret = async ({ id }: { id: string }) => {
  const value = await read({ id });

  return `TODO`;
};
