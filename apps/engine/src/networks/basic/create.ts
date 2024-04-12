import { Stream } from "../../memory/Stream.js";
import { Network } from "../../network/Network.js";
import { Proxy } from "../../proxy/Proxy.js";

export const create = async (): Promise<Network> => {
  const name = "basic";
  const streams: Stream[] = [];
  const proxies: Proxy[] = [];

  const join = async ({ stream }: { stream: Stream }) => {
    const found = streams.find((n) => n.address === stream.address);

    if (found) {
      throw new Error(`Stream ${stream.address} already exists`);
    }

    streams.push(stream);

    return { leave: () => kick({ stream }) };
  };

  const kick = async ({ stream }: { stream: Stream }) => {
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
      throw new Error(`Proxy ${proxy.stream.address} not found`);
    }

    proxies.splice(proxies.indexOf(found), 1);
  };

  const publish = async ({ message }: { message: any }) => {
    const found = streams.find((n) => n.address === message.destination);

    if (!found) {
      throw new Error(`Stream ${message.destination} not found`);
    }

    for (const proxy of proxies) {
      const match = await proxy.filter({ message });

      if (match) {
        proxy.stream.send({ message });
        return;
      }
    }

    found.send({ message });
  };

  const whisper = async ({ message }: { message: any }) => {
    const found = streams.find((n) => n.address === message.destination);

    if (!found) {
      throw new Error(`Stream ${message.destination} not found`);
    }

    found.send({ message });
  };

  return {
    name,
    streams,
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
