import { Evolution } from "../evolution/Evolution.js";

export type Engine = {
  evolution: Evolution;
  generate: (args: { options: string[] }) => Promise<string>;
};
