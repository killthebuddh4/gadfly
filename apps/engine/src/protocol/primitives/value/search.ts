import { prisma } from "../../../lib/prisma.js";

export const search = async () => {
  return prisma.value.findMany();
};
