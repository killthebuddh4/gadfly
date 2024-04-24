import { Listener } from "./Listener.js";

export type Hub = {
  subscribe: (listener: Listener) => Promise<{
    unsubscribe: () => Promise<void>;
  }>;
};
