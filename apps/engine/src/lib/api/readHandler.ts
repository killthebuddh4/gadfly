import * as express from "express";
import { z } from "zod";
import { Reader } from "./Reader.js";

export const readHandler = <
  RequestParams extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
>(props: {
  defn: Reader<RequestParams, ResponseBody>;
  handler: (args: {
    params: z.infer<RequestParams>;
  }) => Promise<z.infer<ResponseBody>>;
}) => {
  return async (req: express.Request, res: express.Response) => {
    try {
      const params = props.defn.request.params.safeParse(req.params);

      if (!params.success) {
        res.status(400).send("Invalid params");
        return;
      }

      let data;
      try {
        data = await props.handler({ params: params.data });
      } catch {
        res.status(500).send("props.handler({ params }) threw an error");
        return;
      }

      let stringified;
      try {
        stringified = JSON.stringify(data);
      } catch (error) {
        res.status(500).send("JSON.stringify(data) failed");
        return;
      }

      res.status(200).send(stringified);
    } catch (error) {
      res.status(500).send("Internal server error");
      return;
    }
  };
};
