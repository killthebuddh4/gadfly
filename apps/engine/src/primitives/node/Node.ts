import { Network } from "../network/Network.js";
import { Signal } from "../signal/Signal.js";
import { Address } from "../address/Address.js";
import { Handler } from "../signal/Handler.js";

export type Node = {
  address: Address;
  network: Network;
  signals: Signal[];
  receive: Handler;
};
