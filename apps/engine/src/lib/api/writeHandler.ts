import * as express from "express";
import { z } from "zod";

export const writeHandler = <
  RequestBody extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
>(props: {
  req: {
    body: RequestBody;
  };
  res: {
    body: ResponseBody;
  };
  handler: (args: {
    body: z.infer<RequestBody>;
  }) => Promise<z.infer<ResponseBody>>;
}) => {
  return async (req: express.Request, res: express.Response) => {
    try {
      const body = props.req.body.safeParse(req.body);

      if (!body.success) {
        res.status(400).json({ ok: false, error: "Invalid body" });
        return;
      }

      const data = props.res.body.safeParse(await props.handler({ body }));

      if (!data.success) {
        res.status(500).json({ ok: false, error: "Invalid data" });
        return;
      }

      res.status(200).json({ ok: true, data });
    } catch (error) {
      res.status(500).json({ ok: false, error: "Internal server error" });
      return;
    }
  };
};
