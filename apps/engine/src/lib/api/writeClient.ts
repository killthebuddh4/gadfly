import { z } from "zod";
import { ApiResponse } from "./ApiResponse.js";
import { Writer } from "./Writer.js";
import { zJsonString } from "@repo/core/zJsonString.js";

export const writeClient = async <
  B extends z.ZodTypeAny,
  D extends z.ZodTypeAny,
>(
  defn: Writer<B, D>,
) => {
  return async (args: {
    url: string;
    body: z.infer<B>;
  }): Promise<ApiResponse<z.infer<D>>> => {
    let body;
    try {
      body = JSON.stringify(args.body);
    } catch (error) {
      return {
        ok: false,
        type: "ClientError",
        message: `JSON.stringify(args.body) threw an error`,
      };
    }

    let response;
    try {
      response = await fetch(`${args.url}/${defn.request.path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
    } catch (error) {
      return {
        ok: false,
        type: "NetworkError",
        message: `Fetch failed`,
        details: {
          method: "POST",
          url: `${args.url}/${defn.request.path}`,
        },
      };
    }

    let responseText;
    try {
      responseText = await response.text();
    } catch (error) {
      return {
        ok: false,
        type: "ClientError",
        message: `response.text() threw an error`,
      };
    }

    if (!response.ok) {
      return {
        ok: false,
        type: "ServerError",
        message: `response.ok is false`,
        details: {
          method: "POST",
          url: args.url,
          status: response.status,
          response: { text: responseText },
        },
      };
    }

    const json = zJsonString.safeParse(responseText);

    if (!json.success) {
      return {
        ok: false,
        type: "ServerError",
        message: "the server's response is not valid JSON",
        details: {
          method: "POST",
          url: `${args.url}/${defn.request.path}`,
          status: response.status,
          response: { text: responseText },
        },
      };
    }

    const parsed = defn.response.body.safeParse(json);

    if (!parsed.success) {
      return {
        ok: false,
        type: "ServerError",
        message: "defn.response.body.parse(json) failed",
        details: {
          method: "POST",
          url: `${args.url}/${defn.request.path}`,
          status: response.status,
          response: { text: responseText },
        },
      };
    }

    return {
      ok: true,
      type: "Success",
      data: parsed.data,
      details: {
        method: "POST",
        url: `${args.url}/${defn.request.path}`,
        status: response.status,
        response: { text: responseText },
      },
    };
  };
};
