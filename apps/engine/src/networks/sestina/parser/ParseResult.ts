export type ParseResult<T> =
  | {
      ok: true;
      data: T;
      reason?: undefined;
    }
  | {
      ok: false;
      data?: undefined;
      reason: string;
    };
