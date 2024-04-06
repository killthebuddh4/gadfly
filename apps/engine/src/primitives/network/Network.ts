import { Selector } from "../selector/Selector.js";
import { Message } from "../message/Message.js";
import { Node } from "../node/Node.js";

export type Network = {
  id: string;
  join: (args: { node: Node }) => Promise<void>;
  leave: (args: { node: Node }) => Promise<void>;
  publish: (args: { message: Message }) => Promise<void>;
  whisper: (args: { message: Message }) => Promise<void>;
  proxy: (args: {
    selector: Selector;
    node: Node;
  }) => Promise<{ release: () => Promise<void> }>;
};
