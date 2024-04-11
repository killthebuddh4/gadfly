export type Daemon = {
  generate: (args: { request: string }) => Promise<boolean>;
};
