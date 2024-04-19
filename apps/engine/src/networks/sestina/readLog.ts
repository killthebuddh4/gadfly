import { Network } from "../../primitives/memory/Network.js";
import { Address } from "../../primitives/memory/Address.js";
import { zSignal } from "../../primitives/memory/zSignal.js";
import { readFile } from "fs/promises";
import { z } from "zod";
import { createLog } from "./createLog.js";

export const readLog = async ({
  network,
  address,
}: {
  network: Network;
  address: Address;
}) => {
  const path = `./data/logs/${address.address}`;

  const data = await readFile(path, "utf8");

  const json = JSON.parse(data);

  const signals = z.array(zSignal).parse(json);

  return createLog({ network, address, signals });
};
