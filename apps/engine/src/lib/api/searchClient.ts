import { z } from "zod";
import { ApiResponse } from "./ApiResponse.js";

const zData = z.object({
  data: z.unknown(),
});

export const searchClient = async <D extends z.ZodTypeAny>(props: {
  path: string;
  data: D;
}) => {
  return async (args: { url: string }): Promise<ApiResponse<z.infer<D>>> => {
    let response;
    try {
      response = await fetch(`${args.url}/${props.path}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return {
        ok: false,
        status: 0,
        data: undefined,
        error: {
          message: `Fetch failed`,
          method: "GET",
          url: `${args.url}/${props.path}`,
          response: { text: `` },
        },
      };
    }

    if (!response.ok) {
      let responseText;
      try {
        responseText = await response.text();
      } catch (error) {
        return {
          ok: false,
          status: response.status,
          data: undefined,
          error: {
            message: `Response.ok is false and also await response.text() failed`,
            method: "GET",
            url: `${args.url}/${props.path}`,
            response: { text: `` },
          },
        };
      }

      return {
        ok: false,
        status: response.status,
        data: undefined,
        error: {
          message: `Response not ok`,
          method: "GET",
          url: `${args.url}/${props.path}`,
          response: { text: responseText },
        },
      };
    }

    let json;
    try {
      json = await response.json();
    } catch (error) {
      return {
        ok: false,
        status: response.status,
        data: undefined,
        error: {
          message: `Response.ok is true but response.json() failed`,
          method: "GET",
          url: args.url,
          response: { text: await response.text() },
        },
      };
    }

    const jsonWithData = zData.safeParse(json);

    if (!jsonWithData.success) {
      let responseText;
      try {
        responseText = JSON.stringify(json);
      } catch (error) {
        return {
          ok: false,
          status: response.status,
          data: undefined,
          error: {
            message: `zData.safeParse(json) failed and also JSON.stringify(json) failed`,
            method: "GET",
            url: args.url,
            response: { text: `` },
          },
        };
      }
      return {
        ok: false,
        status: response.status,
        data: undefined,
        error: {
          message: `zData.parse(json) failed`,
          method: "GET",
          url: args.url,
          response: {
            text: responseText,
          },
        },
      };
    }

    const data = props.data.safeParse(jsonWithData.data);

    if (!data.success) {
      let responseText;
      try {
        responseText = JSON.stringify(json);
      } catch (error) {
        return {
          ok: false,
          status: response.status,
          data: undefined,
          error: {
            message: `props.data.safeParse(jsonWithData.data) failed and also JSON.stringify(json) failed`,
            method: "GET",
            url: args.url,
            response: { text: `` },
          },
        };
      }
      return {
        ok: false,
        status: response.status,
        data: undefined,
        error: {
          message: `props.data.parse(jsonWithData.data) failed`,
          method: "GET",
          url: args.url,
          response: {
            text: responseText,
          },
        },
      };
    }

    return { ok: true, status: response.status, data, error: undefined };
  };
};
