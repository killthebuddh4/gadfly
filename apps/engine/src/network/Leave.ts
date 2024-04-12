import { Network } from "./Network.js";
import { Stream } from "../stream/Stream.js";

export type Leave = (args: {
  network: Network;
  stream: Stream;
}) => Promise<void>;
