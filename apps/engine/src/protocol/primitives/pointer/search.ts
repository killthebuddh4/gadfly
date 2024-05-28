import { prisma } from "../../../lib/prisma.js";

export const search = () => {
  return prisma.pointer.findMany();
};
