import { prisma } from "../lib/prisma.js";
import { Listener } from "./Listener.js";
import { Hub } from "./Hub.js";

export const buildOnTypeChange = async ({
  actorId,
  hub,
  handler,
  variant,
  type,
}: {
  actorId: string;
  hub: Hub;
  handler: Listener;
  variant: "CONTEXT" | "BOUND" | "FREE";
  type: "WIDEN" | "WRITE" | "NARROW";
}) => {
  const variables = await prisma.variable.findMany({
    include: {
      type: true,
    },
    where: {
      variant,
      output: {
        actor_id: actorId,
      },
    },
  });

  if (variant === "CONTEXT") {
    if (variables.length === 0) {
      throw new Error(`No parent variable found for actor with id ${actorId}`);
    }

    if (variables.length > 1) {
      throw new Error(
        `More than one parent found for actor with id ${actorId}`,
      );
    }
  }

  return hub.subscribe(async (operation) => {
    if (operation.type !== type) {
      return;
    }

    const found = variables.find(
      (variable) => variable.type.sequence_id === operation.sequence_id,
    );

    if (found === undefined) {
      return;
    }

    handler(operation);
  });
};
