import { z } from "zod";
import { ApiResponse } from "./ApiResponse.js";
import { zJsonString } from "@repo/core/zJsonString.js";

export const createReadClient = async <
  Query extends z.ZodTypeAny,
  Data extends z.ZodTypeAny,
>(props: {
  path: string;
  query: Query;
  data: Data;
}) => {
  return async (args: {
    url: string;
    query: z.infer<Query>;
  }): Promise<ApiResponse<z.infer<Data>>> => {
    let query;
    try {
      query = new URLSearchParams(args.query);
    } catch (error) {
      return {
        ok: false,
        type: "ClientError",
        message: `new URLSearchParams(args.query) threw an error`,
      };
    }

    const url = `${args.url}/${props.path}?${query}`;

    let response;
    try {
      response = await fetch(url, {
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
          url,
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
          url,
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
          url,
          status: response.status,
          response: { text: responseText },
        },
      };
    }

    const body = props.data.safeParse(json);

    if (!body.success) {
      return {
        ok: false,
        type: "ServerError",
        message: "defn.response.body.parse(json) failed",
        details: {
          method: "GET",
          url,
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
        url,
        status: response.status,
        response: { text: responseText },
      },
    };
  };
};
