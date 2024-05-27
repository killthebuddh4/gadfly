import { z } from "zod";
import { ApiResponse } from "./ApiResponse.js";
import { Searcher } from "./Searcher.js";
import { zJsonString } from "@repo/core/zJsonString.js";

export const searchClient = async <D extends z.ZodTypeAny>(
  defn: Searcher<D>,
) => {
  return async (args: { url: string }): Promise<ApiResponse<z.infer<D>>> => {
    let response;
    try {
      response = await fetch(`${args.url}/${defn.request.path}`, {
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
          url: `${args.url}/${defn.request.path}`,
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
          url: `${args.url}/${defn.request.path}`,
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
        url: `${args.url}/${defn.request.path}`,
        status: response.status,
        response: { text: responseText },
      },
    };
  };
};
