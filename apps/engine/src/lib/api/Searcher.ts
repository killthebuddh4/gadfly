import { z } from "zod";

export type Searcher<ResponseBody extends z.ZodTypeAny> = {
  name: string;
  request: {
    path: string;
  };
  response: {
    body: ResponseBody;
  };
};

export const searcher = <ResponseBody extends z.ZodTypeAny>(props: {
  name: string;
  request: {
    path: string;
  };
  response: {
    body: ResponseBody;
  };
}): Searcher<ResponseBody> => {
  return props;
};
