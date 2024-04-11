export type Process = {
  id: string;
  parent: Process | null;
  children: Process[];
  yield: () => Promise<void>;
  query: () => Promise<void>;
  abort: () => Promise<void>;
  fork: () => Promise<void>;
  exec: () => Promise<void>;
  patch: () => Promise<void>;
  kill: () => Promise<void>;
};
