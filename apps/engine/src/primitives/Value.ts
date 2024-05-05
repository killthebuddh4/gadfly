export type Value = {
  id: () => Promise<string>;
  value: () => Promise<string>;
};
