import { Network } from "../substrate/Network.js";
import { Actor } from "../substrate/Actor.js";
import { Selector } from "../substrate/Selector.js";
import { Message } from "../substrate/Message.js";
import { v4 as uuidv4 } from "uuid";
import { Supervisor } from "../substrate/Supervisor.js";
import { logger } from "../../lib/openai/logger.js";

export const createNetwork = (): Network => {
  const actors: Actor[] = [];
  const supervisors: Supervisor[] = [];

  const join = async ({ actor }: { actor: Actor }) => {
    const found = actors.find((a) => a.id === actor.id);

    if (found) {
      throw new Error(`Actor ${actor.id} already exists`);
    }

    actors.push(actor);
  };

  const leave = async ({ actor }: { actor: Actor }) => {
    const found = actors.find((a) => a.id === actor.id);

    if (!found) {
      throw new Error(`Actor ${actor.id} not found`);
    }

    actors.splice(actors.indexOf(found), 1);
  };

  const publish = async ({ message }: { message: Message }) => {
    logger(message.source, message.text);

    const receiver = actors.find((a) => a.id === message.destination);

    if (receiver === undefined) {
      throw new Error(`Actor ${message.destination} not found`);
    }

    for (const { actor, selector } of Object.values(supervisors)) {
      const match = await selector({ message });

      if (match) {
        actor.receive({ message });
        return;
      }
    }

    receiver.receive({ message });
  };

  const supervise = async ({
    selector,
    supervisor,
  }: {
    selector: Selector;
    supervisor: Actor;
  }) => {
    const id = uuidv4();

    supervisors.push({ id, actor: supervisor, selector });

    return id;
  };

  const release = async ({ selector }: { selector: string }) => {
    const found = supervisors.find((s) => s.id === selector);

    if (!found) {
      throw new Error(`Supervisor ${selector} not found`);
    }

    supervisors.splice(supervisors.indexOf(found), 1);
  };

  return {
    id: "dialectic",
    join,
    leave,
    publish,
    supervise,
    release,
  };
};
