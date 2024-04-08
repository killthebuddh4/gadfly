import { Network } from "../primitives/network/Network.js";
import { Node } from "../primitives/node/Node.js";
import { Filter } from "../primitives/signal/Filter.js";
import { Signal } from "../primitives/signal/Signal.js";
import { logger } from "../lib/openai/logger.js";
import { Listener } from "../primitives/listener/Listener.js";

export const createNetwork = (args: { name: string }): Network => {
  const nodes: Node[] = [];
  const listeners: Array<Listener> = [];

  const kick = async ({ node }: { node: Node }) => {
    const found = nodes.find((a) => a.address === node.address);

    if (!found) {
      throw new Error(`Actor ${node.address} not found`);
    }

    nodes.splice(nodes.indexOf(found), 1);
  };

  const join = async ({ node }: { node: Node }) => {
    const found = nodes.find((n) => n.address === node.address);

    if (found) {
      throw new Error(`Actor ${node.address} already exists`);
    }

    nodes.push(node);

    const leave = async () => {
      const found = nodes.find((a) => a.address === node.address);

      if (!found) {
        throw new Error(`Actor ${node.address} not found`);
      }

      nodes.splice(nodes.indexOf(found), 1);
    };

    return { leave };
  };

  const publish = async ({ signal }: { signal: Signal }) => {
    logger(
      signal.source.address,
      (() => {
        try {
          return JSON.parse(signal.text);
        } catch {
          return signal.text;
        }
      })(),
    );

    const receiver = nodes.find((a) => a.address === signal.destination);

    if (receiver === undefined) {
      throw new Error(`Actor ${signal.destination} not found`);
    }

    for (const { actor, filter } of Object.values(listeners)) {
      const match = await filter({ signal });

      if (match) {
        actor.receive({ signal });
        return;
      }
    }

    receiver.receive({ signal });
  };

  const whisper = async ({ signal }: { signal: Signal }) => {
    const receiver = nodes.find((a) => a.address === signal.destination);

    if (receiver === undefined) {
      throw new Error(`Actor ${signal.destination} not found`);
    }

    receiver.receive({ signal });
  };

  const listen = async ({ listener }: { listener: Listener }) => {
    listeners.push(listener);

    const ignore = async () => {
      const found = listeners.find((l) => l.id === listener.id);

      if (!found) {
        throw new Error(
          `Proxy ${listener.id} not found. Was it already released?`,
        );
      }

      listeners.splice(listeners.indexOf(found), 1);
    };

    return { ignore };
  };

  return { name: args.name, join, kick, publish, whisper, listen };
};
