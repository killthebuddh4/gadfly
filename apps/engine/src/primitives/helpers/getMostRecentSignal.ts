import { Log } from "../memory/Log.js";

export const getMostRecentSignal = ({ log }: { log: Log }) => {
  if (log.signals.length === 0) {
    return null;
  }

  return log.signals[log.signals.length - 1];
};
