export type Process = {
  id: string;
  parent: Process | null;
  children: Process[];
};
