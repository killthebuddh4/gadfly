export type Organism = {
  parents: Organism[];
  children: Organism[];
  payload: unknown;
};
