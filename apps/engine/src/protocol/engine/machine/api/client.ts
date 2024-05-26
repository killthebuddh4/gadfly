import { z } from "zod";
import {
  zCreateProcessBody,
  zCreateProcessData,
  zReadProcessData,
  zCreateSignalBody,
  zReadSignalData,
  zCreatePhaseBody,
  zReadSignalsData,
  zReadTerminalData,
  zReadPhaseData,
  zReadPhasesData,
  zReadInitialData,
} from "./schemas.js";

const readProcess = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/process/${id}`);

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
      data: zReadProcessData.parse(json.data),
    };
  }
};

const createProcess = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateProcessBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/process`, {
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
      data: zCreateProcessData.parse(json.data),
    };
  }
};

const readSignals = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/process/${id}/signals`);

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
      data: zReadSignalsData.parse(json.data),
    };
  }
};

const readSignal = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/process/signal/${id}`);

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
      data: zReadSignalData.parse(json.data),
    };
  }
};

const createSignal = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreateSignalBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/process/signal`, {
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
      data: zReadSignalData.parse(json.data),
    };
  }
};

const readPhases = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/process/${id}/Phases`);

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
      data: zReadPhasesData.parse(json.data),
    };
  }
};

const readPhase = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/process/phase/${id}`);

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
      data: zReadPhaseData.parse(json.data),
    };
  }
};

const createPhase = async ({
  body,
  url,
}: {
  body: z.infer<typeof zCreatePhaseBody>;
  url: string;
}) => {
  const response = await fetch(`${url}/s/process/phase`, {
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
      data: zReadPhaseData.parse(json.data),
    };
  }
};

const readTerminal = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/process/${id}/terminal`);

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
      data: zReadTerminalData.parse(json.data),
    };
  }
};

const readInitial = async ({ id, url }: { id: string; url: string }) => {
  const response = await fetch(`${url}/s/process/${id}/initial`);

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
      data: zReadInitialData.parse(json.data),
    };
  }
};

export const client = {
  read: readProcess,
  create: createProcess,
  signal: {
    read: readSignal,
    create: createSignal,
  },
  signals: {
    read: readSignals,
  },
  phase: {
    read: readPhase,
    create: createPhase,
  },
  Phases: {
    read: readPhases,
  },
  terminal: {
    read: readTerminal,
  },
  initial: {
    read: readInitial,
  },
};
