import { prisma } from "../lib/prisma.js";
import { Listener } from "./Listener.js";
import { Hub } from "./Hub.js";

export const buildOnFeedback = async ({
  actorId,
  hub,
  handler,
  variant,
}: {
  actorId: string;
  hub: Hub;
  handler: Listener;
  variant: "CONTEXT" | "BOUND" | "FREE";
}) => {
  const variables = await prisma.variable.findMany({
    where: {
      variant,
      input: {
        actor_id: actorId,
      },
    },
  });

  return hub.subscribe(async (operation) => {
    if (operation.type !== "FEEDBACK") {
      return;
    }

    const found = variables.find(
      (variable) => variable.sequence_id === operation.sequence_id,
    );

    if (found === undefined) {
      return;
    }

    handler(operation);
  });
};
