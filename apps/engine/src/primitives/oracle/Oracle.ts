export type Oracle = {
  generate: (args: { options: string[] }) => Promise<string>;
};
