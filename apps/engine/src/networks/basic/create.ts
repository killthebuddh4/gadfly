import { Network } from "../../network/Network.js";

export const create = async (): Promise<Network> => {
  return {
    name: "basic",
    streams: [],
    proxies: [],
  };
};
