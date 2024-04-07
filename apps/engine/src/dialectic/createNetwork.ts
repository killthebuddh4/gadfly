import { Network } from "../primitives/network/Network.js";
import { Node } from "../primitives/node/Node.js";
import { Selector } from "../primitives/message/Selector.js";
import { Message } from "../primitives/message/Message.js";
import { logger } from "../lib/openai/logger.js";
import { Proxy } from "../primitives/proxy/Proxy.js";
import { z } from "zod";

export const createNetwork = (): Network => {
  const nodes: Node[] = [];
  const proxies: Array<{
    id: string;
    selector: Selector;
    node: Node;
  }> = [];

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

    const receiver = nodes.find((a) => a.address === message.destination);

    if (receiver === undefined) {
      throw new Error(`Actor ${message.destination} not found`);
    }

    for (const { node, selector } of Object.values(proxies)) {
      const match = await selector({ message });

      if (match) {
        node.receive({ message });
        return;
      }
    }

    receiver.receive({ message });
  };

  const whisper = async ({ message }: { message: Message }) => {
    const receiver = nodes.find((a) => a.address === message.destination);

    if (receiver === undefined) {
      throw new Error(`Actor ${message.destination} not found`);
    }

    receiver.receive({ message });
  };

  const proxy = async ({ proxy }: { proxy: Proxy }) => {
    proxies.push(proxy);

    const ignore = async () => {
      const found = proxies.find((p) => p.id === proxy.id);

      if (!found) {
        throw new Error(
          `Proxy ${proxy.id} not found. Was it already released?`,
        );
      }

      proxies.splice(proxies.indexOf(found), 1);
    };

    return { ignore };
  };

  return { name: "dialectic", join, kick, publish, whisper, proxy };
};
