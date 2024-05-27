import * as express from "express";
import { z } from "zod";
import { Writer } from "./Writer.js";

export const writeHandler = <
  RequestBody extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
>(props: {
  defn: Writer<RequestBody, ResponseBody>;
  handler: (args: {
    body: z.infer<RequestBody>;
  }) => Promise<z.infer<ResponseBody>>;
}) => {
  return async (req: express.Request, res: express.Response) => {
    try {
      const body = props.defn.request.body.safeParse(req.body);

      if (!body.success) {
        res.status(400).send("Invalid body");
        return;
      }

      let data;
      try {
        data = await props.handler({ body: body.data });
      } catch {
        res.status(500).send("props.handler({ body }) threw an error");
        return;
      }

      let stringified;
      try {
        stringified = JSON.stringify(data.data);
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
