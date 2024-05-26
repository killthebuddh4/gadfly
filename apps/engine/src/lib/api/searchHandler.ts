import * as express from "express";
import { z } from "zod";

export const searchHandler = <ResponseBody extends z.ZodTypeAny>(props: {
  res: { body: ResponseBody };
  handler: () => Promise<z.infer<ResponseBody>>;
}) => {
  return async (req: express.Request, res: express.Response) => {
    try {
      const data = props.res.body.safeParse(await props.handler());

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
