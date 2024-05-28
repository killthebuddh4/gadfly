import { z } from "zod";

export type Reader<
  RequestQuery extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
> = {
  name: string;
  request: {
    query: RequestQuery;
  };
  response: {
    body: ResponseBody;
  };
};

export const reader = <
  RequestQuery extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
>(props: {
  name: string;
  request: {
    query: RequestQuery;
  };
  response: {
    body: ResponseBody;
  };
}): Reader<RequestQuery, ResponseBody> => {
  return props;
};
