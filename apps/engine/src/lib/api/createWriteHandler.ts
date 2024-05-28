import * as express from "express";
import { z } from "zod";

export const createWriteHandler =
  <Data extends z.ZodTypeAny>(props: { path: string; data: Data }) =>
  (args: {
    router: express.Router;
    handler: (args: {
      data: Omit<z.infer<Data>, "id" | "created_at" | "updated_at">;
    }) => Promise<z.infer<Data>>;
  }) => {
    args.router.post(
      props.path,
      async (req: express.Request, res: express.Response) => {
        try {
          const requestData = props.data.safeParse(req.body);

          if (!requestData.success) {
            res.status(400).send("Invalid body");
            return;
          }

          let responseData;
          try {
            responseData = await args.handler({ data: requestData.data });
          } catch {
            res
              .status(500)
              .send("props.handler({ data: requestData.data }) threw an error");
            return;
          }

          let stringified;
          try {
            stringified = JSON.stringify(responseData);
          } catch (error) {
            res.status(500).send("JSON.stringify(responseData) failed");
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
