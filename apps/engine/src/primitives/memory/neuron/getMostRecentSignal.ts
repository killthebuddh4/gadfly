import { Sequence } from "../Sequence.js";

export const getMostRecentSignal = ({ sequence }: { sequence: Sequence }) => {
  if (sequence.signals.length === 0) {
    return null;
  }

  return sequence.signals[sequence.signals.length - 1];
};
