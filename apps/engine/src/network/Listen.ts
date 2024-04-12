import { Network } from "./Network.js";
import { Proxy } from "../proxy/Proxy.js";

export type Listen = (args: {
  network: Network;
  proxy: Proxy;
}) => Promise<{ ignore: () => Promise<void> }>;
