import { Handler } from "../signal/Handler.js";
import { Node } from "../node/Node.js";
import { Listener } from "../listener/Listener.js";

export type Network = {
  name: string;
  join: (args: { node: Node }) => Promise<{
    leave: () => Promise<void>;
  }>;
  kick: (args: { node: Node }) => Promise<void>;
  publish: Handler;
  whisper: Handler;
  listen: (args: {
    listener: Listener;
  }) => Promise<{ ignore: () => Promise<void> }>;
};
