import { z } from "zod";
import {
  zReadChildrenData,
  zReadParentsData,
  zCreateRootBody,
  zCreateRootData,
  zReadRootData,
  zReadEdgeData,
  zReadNodeData,
  zReadPointerData,
  zReadGraphData,
  zSearchData,
  zReadTypeData,
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

const readRoot = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadRootData>>> => {
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

const readParents = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadParentsData>>> => {
  const response = await fetch(`${url}/p/value/${id}/parents`);

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
      data: zReadParentsData.parse(json.data),
    };
  }
};

const readChildren = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadChildrenData>>> => {
  const response = await fetch(`${url}/p/value/${id}/children`);

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
      data: zReadChildrenData.parse(json.data),
    };
  }
};

const readEdge = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadEdgeData>>> => {
  const response = await fetch(`${url}/p/value/${id}/edge`);

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
      data: zReadEdgeData.parse(json.data),
    };
  }
};

const readNode = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadNodeData>>> => {
  const response = await fetch(`${url}/p/value/${id}/node`);

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
      data: zReadNodeData.parse(json.data),
    };
  }
};

const readPointer = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadPointerData>>> => {
  const response = await fetch(`${url}/p/value/${id}/pointer`);

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
      data: zReadPointerData.parse(json.data),
    };
  }
};

const readGraph = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadGraphData>>> => {
  const response = await fetch(`${url}/p/value/${id}/graph`);

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
      data: zReadGraphData.parse(json.data),
    };
  }
};

const search = async ({
  url,
}: {
  url: string;
}): Promise<ClientReturn<z.infer<typeof zSearchData>>> => {
  const response = await fetch(`${url}/p/value`);

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
      data: zSearchData.parse(json.data),
    };
  }
};

const readType = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}): Promise<ClientReturn<z.infer<typeof zReadTypeData>>> => {
  const response = await fetch(`${url}/p/value/${id}/type`);

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
      data: zReadTypeData.parse(json.data),
    };
  }
};

export const client = {
  create: createRoot,
  read: readRoot,
  children: {
    read: readChildren,
  },
  parents: {
    read: readParents,
  },
  edge: {
    read: readEdge,
  },
  node: {
    read: readNode,
  },
  pointer: {
    read: readPointer,
  },
  graph: {
    read: readGraph,
  },
  search,
  type: {
    read: readType,
  },
};
