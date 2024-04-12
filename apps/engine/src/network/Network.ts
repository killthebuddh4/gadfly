import { Proxy } from "../proxy/Proxy.js";
import { Stream } from "../memory/Stream.js";
import { Message } from "../memory/Message.js";

export type Network = {
  name: string;
  streams: Stream[];
  proxies: Proxy[];

  join: (args: { stream: Stream }) => Promise<{ leave: () => Promise<void> }>;
  kick: (args: { stream: Stream }) => Promise<void>;
  leave: (args: { stream: Stream }) => Promise<void>;
  listen: (args: { proxy: Proxy }) => Promise<{ ignore: () => Promise<void> }>;
  ignore: (args: { proxy: Proxy }) => Promise<void>;
  publish: (args: { message: Message }) => Promise<void>;
  whisper: (args: { message: Message }) => Promise<void>;
};
