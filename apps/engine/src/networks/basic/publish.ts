import { Publish } from "../../network/Publish.js";
import { Receive } from "../../stream/Receive.js";

const receive: Receive = async ({ stream, message }) => {
  stream.history.push(message);
};

export const publish: Publish = async ({ network, message }) => {
  const found = network.streams.find((n) => n.address === message.destination);

  if (!found) {
    throw new Error(`Stream ${message.destination} not found`);
  }

  for (const proxy of network.proxies) {
    const match = await proxy.filter({ message });

    if (match) {
      receive({ stream: proxy.stream, message });
      return;
    }
  }

  receive({ stream: found, message });
};
