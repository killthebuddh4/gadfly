export type Expression = {
  id: string;
  parent: Expression | null;
  children: Expression[];
};
