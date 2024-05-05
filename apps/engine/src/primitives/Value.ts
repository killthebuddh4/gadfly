export type Value = {
  id: () => Promise<string>;
  type: () => Promise<string>;
  value: () => Promise<string>;
};
