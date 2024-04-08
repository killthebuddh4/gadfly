import { Actor } from "../actor/Actor.js";

export type Engine<Input, Output> = {
  actor: Actor;
  run: (args: { input: Input }) => Promise<Output>;
};
