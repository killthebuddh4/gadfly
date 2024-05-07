import { Signal } from "./Signal.js";
import { Feedback } from "./Feedback.js";

export type Trajectory = {
  signals: () => Promise<Signal>;
  feedback: () => Promise<Feedback>;
};
