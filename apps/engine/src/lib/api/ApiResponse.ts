export type ApiResponse<T> =
  | {
      ok: true;
      status: number;
      data: T;
      error?: undefined;
    }
  | {
      ok: false;
      status: number;
      data?: undefined;
      error: {
        message: string;
        method: string;
        url: string;
        response: {
          text: string;
        };
      };
    };
