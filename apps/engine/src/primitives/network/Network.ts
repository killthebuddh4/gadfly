import { Selector } from "../message/Selector.js";
import { Message } from "../message/Message.js";
import { Node } from "../node/Node.js";

export type Network = {
  name: string;
  join: (args: { node: Node }) => Promise<{
    leave: () => Promise<void>;
  }>;
  kick: (args: { node: Node }) => Promise<void>;
  publish: (args: { message: Message }) => Promise<void>;
  whisper: (args: { message: Message }) => Promise<void>;
  proxy: (args: {
    selector: Selector;
    node: Node;
  }) => Promise<{ detach: () => Promise<void> }>;
};
