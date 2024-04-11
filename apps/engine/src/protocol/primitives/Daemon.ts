export type Daemon = (args: { request: string }) => Promise<boolean>;
