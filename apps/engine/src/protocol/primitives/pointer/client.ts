import { z } from "zod";
import {
  zReadRootData,
  zCreateRootBody,
  zCreateRootData,
  zReadFromData,
  zReadToData,
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
  const response = await fetch(`${url}/p/pointer`, {
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
  const response = await fetch(`${url}/p/pointer/${id}`);

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

const readFrom = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadFromData>>> => {
  const response = await fetch(`${url}/p/pointer/${id}/from`);

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
      data: zReadFromData.parse(json.data),
    };
  }
};

const readTo = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadToData>>> => {
  const response = await fetch(`${url}/p/pointer/${id}/to`);

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
      data: zReadToData.parse(json.data),
    };
  }
};

export const client = {
  read: readRoot,
  create: createRoot,
  from: {
    read: readFrom,
  },
  to: {
    read: readTo,
  },
};
