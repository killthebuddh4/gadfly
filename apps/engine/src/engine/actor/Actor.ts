import { Author } from "./Author.js";
import { Daemon } from "./Daemon.js";

export type Actor = {
  author: () => Promise<Author>;
  daemon: () => Promise<Daemon>;
};
