import { Memory } from "../../memory/Memory.js";
import { Network } from "../../network/Network.js";
import { Proxy } from "../../proxy/Proxy.js";

export const create = async (): Promise<Network> => {
  const name = "basic";
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

  const publish = async ({ Signal }: { Signal: any }) => {
    const found = streams.find((n) => n.address === Signal.destination);

    if (!found) {
      throw new Error(`Stream ${Signal.destination} not found`);
    }

    for (const proxy of proxies) {
      const match = await proxy.filter({ Signal });

      if (match) {
        proxy.memory.write({ Signal });
        return;
      }
    }

    found.write({ Signal });
  };

  const whisper = async ({ Signal }: { Signal: any }) => {
    const found = streams.find((n) => n.address === Signal.destination);

    if (!found) {
      throw new Error(`Stream ${Signal.destination} not found`);
    }

    found.write({ Signal });
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
