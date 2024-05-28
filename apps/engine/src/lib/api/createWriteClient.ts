import { z } from "zod";
import { ApiResponse } from "./ApiResponse.js";
import { zJsonString } from "@repo/core/zJsonString.js";

export const createWriteClient = async <Data extends z.ZodTypeAny>(props: {
  path: string;
  data: Data;
}) => {
  return async (args: {
    url: string;
    data: z.infer<Data>;
  }): Promise<
    ApiResponse<Omit<z.infer<Data>, "id" | "created_at" | "updated_at">>
  > => {
    let body;
    try {
      body = JSON.stringify(args.data);
    } catch (error) {
      return {
        ok: false,
        type: "ClientError",
        message: `JSON.stringify(args.data) threw an error`,
      };
    }

    const url = `${args.url}/${props.path}`;

    let response;
    try {
      response = await fetch(`${args.url}/${props.path}`, {
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
          method: "POST",
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
          method: "POST",
          url: args.url,
          status: response.status,
          response: { text: responseText },
        },
      };
    }

    const parsed = props.data.safeParse(json);

    if (!parsed.success) {
      return {
        ok: false,
        type: "ServerError",
        message: "props.data.parse(json) failed",
        details: {
          method: "POST",
          url,
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
        url,
        status: response.status,
        response: { text: responseText },
      },
    };
  };
};
