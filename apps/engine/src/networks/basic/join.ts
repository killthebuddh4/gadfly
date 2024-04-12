import { Join } from "../../network/Join.js";

export const join: Join = async ({ network, stream }) => {
  const found = network.streams.find((n) => n.address === stream.address);

  if (found) {
    throw new Error(`Stream ${stream.address} already exists`);
  }

  network.streams.push(stream);

  const leave = async () => {
    const found = network.streams.find((a) => a.address === stream.address);

    if (!found) {
      throw new Error(`Stream ${stream.address} not found`);
    }

    network.streams.splice(network.streams.indexOf(found), 1);
  };

  return { leave };
};
