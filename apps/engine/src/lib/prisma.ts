import { config } from "./config.js";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.SUPABASE_CONN_STRING,
    },
  },
});
