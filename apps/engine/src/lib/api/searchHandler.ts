import * as express from "express";
import { z } from "zod";
import { Searcher } from "./Searcher.js";

export const searchHandler = <ResponseBody extends z.ZodTypeAny>(props: {
  defn: Searcher<ResponseBody>;
  handler: () => Promise<z.infer<ResponseBody>>;
}) => {
  return async (req: express.Request, res: express.Response) => {
    try {
      let data;
      try {
        data = await props.handler();
      } catch {
        res.status(500).send("props.handler() threw an error");
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
