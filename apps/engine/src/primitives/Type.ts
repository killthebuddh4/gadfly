export type Type = {
  id: () => Promise<string>;
  type: () => Promise<string>;
};
