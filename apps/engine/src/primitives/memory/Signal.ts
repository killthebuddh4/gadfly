import { Log } from "./Log.js";

export type Signal = {
  id: string;
  log: Log;
  index: number;
  stimuli: Signal[];
  text: string;
};
