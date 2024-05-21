import { Brand } from "./Brand";
import { Branded } from "./Branded";

type BrandBase<T> = T extends Brand<infer Base, any> ? Base : never;

type BrandBuilder<T extends Branded<Base, any>, Base = BrandBase<T>> = {
  check: (value: Base) => value is T;
  assert: (value: Base) => asserts value is T;
  from: (value: Base) => T;
};

type BrandBuilderOptions<Base> = {
  validate?: (value: Base) => boolean | string;
};

export const create = <T extends Branded<Base, any>, Base = BrandBase<T>>({
  validate = () => true,
}: BrandBuilderOptions<Base> = {}): BrandBuilder<T, Base> => {
  function assertIsBrand(value: Base): asserts value is T {
    const result = validate(value);
    if (typeof result === "string") {
      throw new Error(result);
    }
    if (result === false) {
      throw new Error(`Invalid value ${value}`);
    }
  }

  return {
    check: (value): value is T => validate(value) === true,
    assert: assertIsBrand,
    from: (value) => {
      assertIsBrand(value);
      return value as T;
    },
  };
};
