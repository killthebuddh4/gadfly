import { Message } from "../message/Message.js";
import { Node } from "../node/Node.js";
import { Proxy } from "../proxy/Proxy.js";

export type Network = {
  name: string;
  join: (args: { node: Node }) => Promise<{
    leave: () => Promise<void>;
  }>;
  kick: (args: { node: Node }) => Promise<void>;
  publish: (args: { message: Message }) => Promise<void>;
  whisper: (args: { message: Message }) => Promise<void>;
  proxy: (args: { proxy: Proxy }) => Promise<{ ignore: () => Promise<void> }>;
};
