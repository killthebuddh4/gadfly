import { Network } from "../substrate/Network.js";
import { Actor } from "../substrate/Actor.js";
import { Selector } from "../substrate/Selector.js";
import { Message } from "../substrate/Message.js";
import { v4 as uuidv4 } from "uuid";
import { Proxy } from "../substrate/Proxy.js";
import { logger } from "../../lib/openai/logger.js";

export const createNetwork = (): Network => {
  const actors: Actor[] = [];
  const proxies: Proxy[] = [];

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
    logger(
      message.source,
      (() => {
        try {
          return JSON.parse(message.text);
        } catch {
          return message.text;
        }
      })(),
    );

    const receiver = actors.find((a) => a.id === message.destination);

    if (receiver === undefined) {
      throw new Error(`Actor ${message.destination} not found`);
    }

    for (const { actor, selector } of Object.values(proxies)) {
      const match = await selector({ message });

      if (match) {
        actor.receive({ message });
        return;
      }
    }

    receiver.receive({ message });
  };

  const forward = async ({ message }: { message: Message }) => {
    const receiver = actors.find((a) => a.id === message.destination);

    if (receiver === undefined) {
      throw new Error(`Actor ${message.destination} not found`);
    }

    receiver.receive({ message });
  };

  const proxy = async ({
    selector,
    actor,
  }: {
    selector: Selector;
    actor: Actor;
  }) => {
    const id = uuidv4();

    proxies.push({ id, actor, selector });

    const release = async () => {
      const found = proxies.find((p) => p.id === id);

      if (!found) {
        throw new Error(`Proxy ${proxy} not found. Was it already released?`);
      }

      proxies.splice(proxies.indexOf(found), 1);
    };

    return { release };
  };

  return {
    id: "dialectic",
    join,
    leave,
    publish,
    forward,
    proxy,
  };
};
