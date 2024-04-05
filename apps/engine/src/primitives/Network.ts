import { Selector } from "./Selector.js";
import { Message } from "./Message.js";
import { Actor } from "./Actor.js";

export type Network = {
  id: string;
  join: ({ actor }: { actor: Actor }) => Promise<void>;
  leave: ({ actor }: { actor: Actor }) => Promise<void>;
  publish: ({ message }: { message: Message }) => Promise<void>;
  whisper: ({ message }: { message: Message }) => Promise<void>;
  proxy: ({
    selector,
    actor,
  }: {
    selector: Selector;
    actor: Actor;
  }) => Promise<{ release: () => Promise<void> }>;
};
