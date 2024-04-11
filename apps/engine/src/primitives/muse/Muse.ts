export type Muse = {
  generate: (args: { message: string }) => Promise<string>;
};
