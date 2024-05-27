import { z } from "zod";

export type Writer<
  RequestBody extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
> = {
  name: string;
  request: {
    path: string;
    body: RequestBody;
  };
  response: {
    body: ResponseBody;
  };
};

export const writer = <
  RequestBody extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
>(props: {
  name: string;
  request: {
    path: string;
    body: RequestBody;
  };
  response: {
    body: ResponseBody;
  };
}): Writer<RequestBody, ResponseBody> => {
  return props;
};
