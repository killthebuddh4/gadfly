import { z } from "zod";

export type Reader<
  RequestParams extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
> = {
  name: string;
  request: {
    path: (params: z.infer<RequestParams>) => string;
    params: RequestParams;
  };
  response: {
    body: ResponseBody;
  };
};

export const reader = <
  RequestParams extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
>(props: {
  name: string;
  request: {
    path: (params: z.infer<RequestParams>) => string;
    params: RequestParams;
  };
  response: {
    body: ResponseBody;
  };
}): Reader<RequestParams, ResponseBody> => {
  return props;
};
