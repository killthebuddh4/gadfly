import { Network } from "./Network.js";
import { Stream } from "../stream/Stream.js";

export type Join = (args: {
  network: Network;
  stream: Stream;
}) => Promise<{ leave: () => Promise<void> }>;
