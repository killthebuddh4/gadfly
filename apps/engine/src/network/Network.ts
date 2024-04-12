import { Proxy } from "../proxy/Proxy.js";
import { Stream } from "../stream/Stream.js";

export type Network = {
  name: string;
  streams: Stream[];
  proxies: Proxy[];
};
