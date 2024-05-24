import { z } from "zod";
import {
  zCreateSequenceBody,
  zCreateSequenceData,
  zReadSequenceData,
  zCreateIteratorBody,
  zReadIteratorData,
  zCreateElementBody,
  zReadIteratorsData,
  zReadLastData,
  zReadElementData,
  zReadElementsData,
  zReadFirstData,
} from "./schemas.js";

const readSequence = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/sequence/${id}`);

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
      data: zReadSequenceData.parse(json.data),
    };
  }
};

const createSequence = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateSequenceBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/sequence`, {
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
      data: zCreateSequenceData.parse(json.data),
    };
  }
};

const readIterators = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/sequence/${id}/iterators`);

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
      data: zReadIteratorsData.parse(json.data),
    };
  }
};

const readIterator = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/sequence/iterator/${id}`);

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
      data: zReadIteratorData.parse(json.data),
    };
  }
};

const createIterator = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateIteratorBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/sequence/iterator`, {
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
      data: zReadIteratorData.parse(json.data),
    };
  }
};

const readElements = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/sequence/${id}/Elements`);

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
      data: zReadElementsData.parse(json.data),
    };
  }
};

const readElement = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/sequence/element/${id}`);

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
      data: zReadElementData.parse(json.data),
    };
  }
};

const createElement = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateElementBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/sequence/element`, {
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
      data: zReadElementData.parse(json.data),
    };
  }
};

const readLast = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/sequence/${id}/last`);

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
      data: zReadLastData.parse(json.data),
    };
  }
};

const readFirst = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/sequence/${id}/first`);

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
      data: zReadFirstData.parse(json.data),
    };
  }
};

export const client = {
  read: readSequence,
  create: createSequence,
  iterator: {
    read: readIterator,
    create: createIterator,
  },
  iterators: {
    read: readIterators,
  },
  element: {
    read: readElement,
    create: createElement,
  },
  Elements: {
    read: readElements,
  },
  last: {
    read: readLast,
  },
  first: {
    read: readFirst,
  },
};
