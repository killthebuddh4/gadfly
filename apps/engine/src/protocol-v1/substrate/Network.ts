import { Selector } from "./Selector.js";
import { Message } from "./Message.js";
import { Actor } from "./Actor.js";

export type Network = {
  id: string;
  join: ({ actor }: { actor: Actor }) => Promise<void>;
  leave: ({ actor }: { actor: Actor }) => Promise<void>;
  publish: ({ message }: { message: Message }) => Promise<void>;
  supervise: ({
    selector,
    supervisor,
  }: {
    selector: Selector;
    supervisor: Actor;
  }) => Promise<string>;
  release: ({ selector }: { selector: string }) => Promise<void>;
};
