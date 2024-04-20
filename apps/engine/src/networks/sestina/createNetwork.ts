import { Actor } from "../../primitives/actor/Actor.js";
import { Network } from "../../primitives/network/Network.js";
import { Log } from "../../primitives/network/Log.js";
import { Signal } from "../../primitives/network/Signal.js";
import { Handler } from "../../primitives/network/Handler.js";

export const createNetwork = async (): Promise<Network> => {
  const name = "sestina";
  const logs: Log[] = [];
  const actors: Actor[] = [];

  const attach = {
    log: async ({ log }: { log: Log }) => {
      const found = logs.find((a) => a.address.address === log.address.address);

      if (found !== undefined) {
        throw new Error(`Actor ${log.address.address} already attached`);
      }

      console.log(`Attaching log ${log.address.address} to network ${name}`);

      logs.push(log);

      return {
        detach: async () => {
          const index = logs.findIndex(
            (s) => s.address.address === log.address.address,
          );

          if (index === -1) {
            throw new Error(`Actor ${log.address.address} not attached`);
          }

          logs.splice(index, 1);
        },
      };
    },

    actor: async ({ actor }: { actor: Actor }) => {
      const found = actors.find(
        (n) => n.output.address.address === actor.output.address.address,
      );

      if (found !== undefined) {
        throw new Error(
          `Actor ${actor.output.address.address} already attached`,
        );
      }

      console.log(
        `Attaching actor ${actor.output.address.address} to network ${name}`,
      );

      actors.push(actor);

      return {
        detach: async () => {
          const index = actors.findIndex(
            (n) => n.output.address.address === actor.output.address.address,
          );

          if (index === -1) {
            throw new Error(
              `Actor ${actor.output.address.address} not attached`,
            );
          }

          actors.splice(index, 1);
        },
      };
    },
  };

  const subscribers: Handler[] = [];

  const publish = async ({ signal }: { signal: Signal }) => {
    for (const subscriber of subscribers) {
      subscriber({ signal });
    }

    return signal;
  };

  const subscribe = async ({ handler }: { handler: Handler }) => {
    subscribers.push(handler);

    return {
      unsubscribe: async () => {
        subscribers.splice(subscribers.indexOf(handler), 1);
      },
    };
  };

  return {
    name,
    logs: logs,
    actors,
    attach,
    publish,
    subscribe,
  };
};
