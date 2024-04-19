import { Log } from "../../primitives/memory/Log.js";
import { writeFile } from "fs/promises";

export const writeLog = async ({ log }: { log: Log }) => {
  const path = `./data/logs/${log.address.address}`;

  return writeFile(path, JSON.stringify(log.signals, null, 2));
};
