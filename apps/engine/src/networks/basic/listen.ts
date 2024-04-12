import { Listen } from "../../network/Listen.js";

export const listen: Listen = async ({ network, proxy }) => {
  network.proxies.push(proxy);

  const ignore = async () => {
    const found = network.proxies.find((p) => p === proxy);

    if (!found) {
      throw new Error(`Proxy ${proxy.stream.address} not found`);
    }

    network.proxies = network.proxies.filter((p) => p !== proxy);
  };

  return { ignore };
};
