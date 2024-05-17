import { z } from "zod";
import {
  zCreateRootBody,
  zCreateRootData,
  zReadRootData,
  zReadDownstreamData,
  zReadUpstreamData,
} from "./schemas.js";

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

const createRoot = async ({
  url,
  body,
}: {
  url: string;
  body: z.infer<typeof zCreateRootBody>;
}): Promise<ClientReturn<z.infer<typeof zCreateRootData>>> => {
  const response = await fetch(`${url}/p/node`, {
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

const readRoot = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadRootData>>> => {
  const response = await fetch(`${url}/p/node/${id}`);

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

const readDownstream = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadDownstreamData>>> => {
  const response = await fetch(`${url}/p/node/${id}/downstream`);

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
      data: zReadDownstreamData.parse(json.data),
    };
  }
};

const readUpstream = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadUpstreamData>>> => {
  const response = await fetch(`${url}/p/node/${id}/upstream`);

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
      data: zReadUpstreamData.parse(json.data),
    };
  }
};

export const client = {
  create: createRoot,
  read: readRoot,
  downstream: {
    read: readDownstream,
  },
  upstream: {
    read: readUpstream,
  },
};
