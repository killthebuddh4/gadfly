import * as express from "express";
import { z } from "zod";

export const createReadHandler =
  <Query extends z.ZodTypeAny, Data extends z.ZodTypeAny>(props: {
    path: string;
    query: Query;
    data: Data;
  }) =>
  (args: {
    router: express.Router;
    handler: (args: { query: z.infer<Query> }) => Promise<z.infer<Data>>;
  }) => {
    args.router.get(
      props.path,
      async (req: express.Request, res: express.Response) => {
        try {
          const query = props.query.safeParse(req.query);

          if (!query.success) {
            res.status(400).send("Invalid query");
            return;
          }

          let data;
          try {
            data = await args.handler({ query: query.data });
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
