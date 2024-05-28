import * as express from "express";
import { z } from "zod";
import { Reader } from "./Reader.js";

export const readHandler = <
  RequestQuery extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
>(props: {
  defn: Reader<RequestQuery, ResponseBody>;
  app: express.Express;
  handler: (args: {
    query: z.infer<RequestQuery>;
  }) => Promise<z.infer<ResponseBody>>;
}) => {
  props.app.get(
    props.defn.name,
    async (req: express.Request, res: express.Response) => {
      try {
        const query = props.defn.request.query.safeParse(req.query);

        if (!query.success) {
          res.status(400).send("Invalid query");
          return;
        }

        let data;
        try {
          data = await props.handler({ query: query.data });
        } catch {
          res.status(500).send("props.handler({ query }) threw an error");
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
    },
  );
};
