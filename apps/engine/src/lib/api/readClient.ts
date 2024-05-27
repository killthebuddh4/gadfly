import { z } from "zod";
import { ApiResponse } from "./ApiResponse.js";
import { Reader } from "./Reader.js";
import { zJsonString } from "@repo/core/zJsonString.js";

export const readClient = async <
  P extends z.ZodTypeAny,
  D extends z.ZodTypeAny,
>(
  defn: Reader<P, D>,
) => {
  return async (args: {
    url: string;
    params: z.infer<P>;
  }): Promise<ApiResponse<z.infer<D>>> => {
    let path;
    try {
      path = defn.request.path(args.params);
    } catch (error) {
      return {
        ok: false,
        type: "ClientError",
        message: `defn.request.path(args.params) threw an error`,
      };
    }

    let response;
    try {
      response = await fetch(`${args.url}/${path}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return {
        ok: false,
        type: "NetworkError",
        message: `Fetch failed`,
        details: {
          method: "GET",
          url: `${args.url}/${path}`,
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
          method: "GET",
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
          method: "GET",
          url: `${args.url}/${path}`,
          status: response.status,
          response: { text: responseText },
        },
      };
    }

    const body = defn.response.body.safeParse(json);

    if (!body.success) {
      return {
        ok: false,
        type: "ServerError",
        message: "defn.response.body.parse(json) failed",
        details: {
          method: "GET",
          url: `${args.url}/${path}`,
          status: response.status,
          response: { text: responseText },
        },
      };
    }

    return {
      ok: true,
      type: "Success",
      data: body.data,
      details: {
        method: "GET",
        url: `${args.url}/${path}`,
        status: response.status,
        response: { text: responseText },
      },
    };
  };
};
