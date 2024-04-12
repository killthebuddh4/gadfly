import { Sequence } from "../../primitives/substrate/Sequence.js";
import { Message } from "../../primitives/substrate/Message.js";
import { Handler } from "../../primitives/substrate/Handler.js";
import { v4 as uuid } from "uuid";

export const createIngress = async (): Promise<Sequence> => {
  const address = { address: "simple ingress" };

  const messages: Message[] = [];

  const proxies: {
    tracers: Array<{ id: string; sequence: Sequence }>;
    forward: Sequence | null;
    reverse: Sequence | null;
  } = { tracers: [], forward: null, reverse: null };

  const forward = async ({ sequence }: { sequence: Sequence }) => {
    if (proxies.forward !== null) {
      throw new Error("Forward proxy already exists");
    }

    proxies.forward = sequence;

    return {
      ignore: async () => {
        proxies.forward = null;
      },
    };
  }

  const reverse = async ({ sequence }: { sequence: Sequence }) => {
    if (proxies.reverse !== null) {
      throw new Error("Reverse proxy already exists");
    }

    proxies.reverse = sequence;

    return {
      ignore: async () => {
        proxies.reverse = null;
      },
    };
  }

  const read = async () => {
    if (proxies.forward !== null) {
      return proxies.forward.read();
    } else {
      return messages;
    }
  };

  const append = async ({ message }: { message: Message }) => {
    if (proxies.reverse !== null) {
      await proxies.reverse.append({ message });
    } else {
      messages.push(message);
    }
  }

  return {
    address,
    messages,
    read,
    append,
    proxy: {
      forward,
      reverse,
    },
  };