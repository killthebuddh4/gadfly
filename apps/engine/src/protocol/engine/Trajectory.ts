export type Trajectory = {
  option: string;
  parent: Trajectory | null;
  children: Trajectory[];
};
