import { Handler } from "./Handler.js";
import { Actor } from "../actor/Actor.js";
import { Log } from "./Log.js";

export type Network = {
  name: string;
  logs: Log[];
  actors: Actor[];

  attach: {
    log: (args: { log: Log }) => Promise<{
      detach: () => Promise<void>;
    }>;

    actor: (args: { actor: Actor }) => Promise<{
      detach: () => Promise<void>;
    }>;
  };

  publish: Handler;
  subscribe: (args: { handler: Handler }) => Promise<{
    unsubscribe: () => Promise<void>;
  }>;
};
