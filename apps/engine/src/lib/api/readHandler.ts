import * as express from "express";
import { z } from "zod";

export const readHandler = <
  RequestParams extends z.ZodTypeAny,
  ResponseBody extends z.ZodTypeAny,
>(props: {
  req: { params: RequestParams };
  res: { body: ResponseBody };
  handler: (args: {
    params: z.infer<RequestParams>;
  }) => Promise<z.infer<ResponseBody>>;
}) => {
  return async (req: express.Request, res: express.Response) => {
    try {
      const params = (props.req.params || z.undefined()).safeParse(req.params);

      if (!params.success) {
        res.status(400).json({ ok: false, error: "Invalid params" });
        return;
      }

      const data = props.res.body.safeParse(await props.handler({ params }));

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
