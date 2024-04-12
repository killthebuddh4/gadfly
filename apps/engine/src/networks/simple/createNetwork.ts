import { Memory } from "../../primitives/memory/Memory.js";
import { Message } from "../../primitives/memory/Message.js";
import { Network } from "../../primitives/memory/Network.js";
import { Proxy } from "../../primitives/proxy/Proxy.js";

export const createNetwork = async (): Promise<Network> => {
  const name = "sestina";
  const streams: Memory[] = [];
  const proxies: Proxy[] = [];

  const join = async ({ stream }: { stream: Memory }) => {
    const found = streams.find((n) => n.address === stream.address);

    if (found) {
      throw new Error(`Stream ${stream.address} already exists`);
    }

    streams.push(stream);

    return { leave: () => kick({ stream }) };
  };

  const kick = async ({ stream }: { stream: Memory }) => {
    const found = streams.find((n) => n.address === stream.address);

    if (!found) {
      throw new Error(`Stream ${stream.address} not found`);
    }

    streams.splice(streams.indexOf(found), 1);
  };

  const listen = async ({ proxy }: { proxy: Proxy }) => {
    proxies.push(proxy);

    return { ignore: () => ignore({ proxy }) };
  };

  const ignore = async ({ proxy }: { proxy: Proxy }) => {
    const found = proxies.find((p) => p === proxy);

    if (!found) {
      throw new Error(`Proxy ${proxy.memory.address} not found`);
    }

    proxies.splice(proxies.indexOf(found), 1);
  };

  const publish = async ({ message }: { message: Message }) => {
    const found = streams.find((n) => n.address === message.destination);

    if (!found) {
      throw new Error(`Stream ${message.destination} not found`);
    }

    for (const proxy of proxies) {
      const match = await proxy.filter({ message });

      if (match) {
        proxy.memory.write({ message });
        return;
      }
    }

    found.write({ message });
  };

  const whisper = async ({ message }: { message: Message }) => {
    const found = streams.find((n) => n.address === message.destination);

    if (!found) {
      throw new Error(`Stream ${message.destination} not found`);
    }

    found.write({ message });
  };

  return {
    name,
    memory: streams,
    proxies,
    join,
    kick,
    leave: kick,
    listen,
    ignore,
    publish,
    whisper,
  };
};
