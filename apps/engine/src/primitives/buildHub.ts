import { prisma } from "../lib/prisma.js";
import { supabase } from "../lib/supabase.js";
import { Hub } from "./Hub.js";
import { Listener } from "./Listener.js";
import { zPayload } from "./zPayload.js";

export const buildHub = async ({
  networkId,
}: {
  networkId: string;
}): Promise<Hub> => {
  const listeners: Listener[] = [];

  supabase
    .channel(`network:${networkId}`)
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "Operation" },
      async (payload) => {
        const obj = zPayload.parse(payload);

        const operation = await prisma.operation.findUnique({
          where: { id: obj.new.id },
        });

        if (operation === null) {
          throw new Error(
            `Operation with id ${obj.new.id} not found even though it was just inserted`,
          );
        }

        for (const listener of listeners) {
          listener(operation);
        }
      },
    )
    .subscribe();

  return {
    subscribe: async (listener: Listener) => {
      listeners.push(listener);

      return {
        unsubscribe: async () => {
          const index = listeners.indexOf(listener);

          if (index == -1) {
            return;
          }

          listeners.splice(index, 1);
        },
      };
    },
  };
};
