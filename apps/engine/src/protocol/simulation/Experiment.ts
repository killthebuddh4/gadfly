export type Experiment = {
  parents: Experiment[];
  children: Experiment[];
  payload: unknown;
};
