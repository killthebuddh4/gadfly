import { z } from "zod";
import {
  zCreateTreeBody,
  zCreateTreeData,
  zReadTreeData,
  zCreatePathBody,
  zReadPathData,
  zCreateBranchBody,
  zReadPathsData,
  zReadLeavesData,
  zReadBranchData,
  zReadBranchesData,
  zReadRootData,
} from "./schemas.js";

const readTree = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/tree/${id}`);

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
      data: zReadTreeData.parse(json.data),
    };
  }
};

const createTree = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateTreeBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/tree`, {
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
      data: zCreateTreeData.parse(json.data),
    };
  }
};

const readPaths = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/tree/${id}/paths`);

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
      data: zReadPathsData.parse(json.data),
    };
  }
};

const readPath = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/tree/path/${id}`);

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
      data: zReadPathData.parse(json.data),
    };
  }
};

const createPath = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreatePathBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/tree/path`, {
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
      data: zReadPathData.parse(json.data),
    };
  }
};

const readBranches = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/tree/${id}/Branches`);

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
      data: zReadBranchesData.parse(json.data),
    };
  }
};

const readBranch = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/tree/branch/${id}`);

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
      data: zReadBranchData.parse(json.data),
    };
  }
};

const createBranch = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateBranchBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/tree/branch`, {
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
      data: zReadBranchData.parse(json.data),
    };
  }
};

const readLeaves = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/tree/${id}/leaves`);

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
      data: zReadLeavesData.parse(json.data),
    };
  }
};

const readRoot = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/tree/${id}/root`);

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

export const client = {
  read: readTree,
  create: createTree,
  path: {
    read: readPath,
    create: createPath,
  },
  paths: {
    read: readPaths,
  },
  branch: {
    read: readBranch,
    create: createBranch,
  },
  Branches: {
    read: readBranches,
  },
  leaves: {
    read: readLeaves,
  },
  root: {
    read: readRoot,
  },
};
