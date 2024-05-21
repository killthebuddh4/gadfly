declare const __brand: unique symbol;

declare const __base: unique symbol;

export type Brand<Base, B> = {
  [__brand]: B;
  [__base]: Base;
};
