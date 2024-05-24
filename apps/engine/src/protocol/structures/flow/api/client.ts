import { z } from "zod";
import {
  zCreateRootBody,
  zCreateRootData,
  zReadRootData,
  zCreateChannelBody,
  zReadChannelData,
  zCreateStateBody,
  zReadChannelsData,
  zReadHeadsData,
  zReadStateData,
  zReadStatesData,
  zReadTailsData,
} from "./schemas.js";

const readRoot = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/flow/${id}`);

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

const createRoot = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateRootBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/flow`, {
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

const readChannels = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/flow/${id}/channels`);

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
      data: zReadChannelsData.parse(json.data),
    };
  }
};

const readChannel = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/flow/channel/${id}`);

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
      data: zReadChannelData.parse(json.data),
    };
  }
};

const createChannel = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateChannelBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/flow/channel`, {
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
      data: zReadChannelData.parse(json.data),
    };
  }
};

const readStates = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/flow/${id}/states`);

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
      data: zReadStatesData.parse(json.data),
    };
  }
};

const readState = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/flow/state/${id}`);

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
      data: zReadStateData.parse(json.data),
    };
  }
};

const createState = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateStateBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/flow/state`, {
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
      data: zReadStateData.parse(json.data),
    };
  }
};

const readHeads = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/flow/${id}/heads`);

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
      data: zReadHeadsData.parse(json.data),
    };
  }
};

const readTails = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/flow/${id}/tails`);

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
      data: zReadTailsData.parse(json.data),
    };
  }
};

export const client = {
  read: readRoot,
  create: createRoot,
  channel: {
    read: readChannel,
    create: createChannel,
  },
  channels: {
    read: readChannels,
  },
  state: {
    read: readState,
    create: createState,
  },
  states: {
    read: readStates,
  },
  heads: {
    read: readHeads,
  },
  tails: {
    read: readTails,
  },
};
