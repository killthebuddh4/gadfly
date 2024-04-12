import { Proxy } from "../proxy/Proxy.js";
import { Memory } from "../memory/Memory.js";
import { Signal } from "../memory/Signal.js";

export type Network = {
  name: string;
  streams: Memory[];
  proxies: Proxy[];

  join: (args: { stream: Memory }) => Promise<{ leave: () => Promise<void> }>;
  kick: (args: { stream: Memory }) => Promise<void>;
  leave: (args: { stream: Memory }) => Promise<void>;
  listen: (args: { proxy: Proxy }) => Promise<{ ignore: () => Promise<void> }>;
  ignore: (args: { proxy: Proxy }) => Promise<void>;
  publish: (args: { Signal: Signal }) => Promise<void>;
  whisper: (args: { Signal: Signal }) => Promise<void>;
};
