import { z } from "zod";
import { zCreateRootBody, zCreateRootData, zReadRootData } from "./schemas.js";

type ClientReturn<T> =
  | {
      ok: true;
      status: number;
      data: T;
    }
  | {
      ok: false;
      status: number;
      data?: undefined;
    };

export const createRootClient = async ({
  url,
  body,
}: {
  url: string;
  body: z.infer<typeof zCreateRootBody>;
}): Promise<ClientReturn<z.infer<typeof zCreateRootData>>> => {
  const response = await fetch(`${url}/p/value`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      data: undefined,
    };
  } else {
    return {
      ok: true,
      status: response.status,
      data: zCreateRootData.parse(json.data),
    };
  }
};

export const readRootClient = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}) => {
  const response = await fetch(`${url}/p/value/${id}`);

  const json = await response.json();

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      data: undefined,
    };
  } else {
    return {
      ok: true,
      status: response.status,
      data: zReadRootData.parse(json.data),
    };
  }
};
