export type Generation<T> = Array<{
  parent: T | null;
  children: Generation<T>;
}>;
