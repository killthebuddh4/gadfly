import { Kick } from "../../network/Kick.js";

export const kick: Kick = async ({ network, stream }) => {
  const found = network.streams.find((n) => n.address === stream.address);

  if (!found) {
    throw new Error(`Stream ${stream.address} not found`);
  }

  network.streams.splice(network.streams.indexOf(found), 1);
};
