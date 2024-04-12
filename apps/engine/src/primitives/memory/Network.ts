import { Proxy } from "../proxy/Proxy.js";
import { Memory } from "./Memory.js";
import { Message } from "./Message.js";

export type Network = {
  name: string;
  memory: Memory[];
  proxies: Proxy[];

  join: (args: { stream: Memory }) => Promise<{ leave: () => Promise<void> }>;
  kick: (args: { stream: Memory }) => Promise<void>;
  leave: (args: { stream: Memory }) => Promise<void>;
  listen: (args: { proxy: Proxy }) => Promise<{ ignore: () => Promise<void> }>;
  ignore: (args: { proxy: Proxy }) => Promise<void>;
  publish: (args: { message: Message }) => Promise<void>;
  whisper: (args: { message: Message }) => Promise<void>;
};
