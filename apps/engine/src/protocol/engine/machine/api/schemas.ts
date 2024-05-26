import { z } from "zod";
import { zGraph, zNode } from "../../../primitives/api/schemas.js";
import { zEdge } from "../../../primitives/api/schemas.js";

export const zProcess = zGraph;

export const zCreateProcessBody = zProcess.omit({ id: true });

export const zCreateProcessData = zProcess;

export const zReadProcessParams = zProcess.pick({ id: true });

export const zReadProcessData = zProcess;

export const zSignal = zEdge;

export const zCreateSignalParams = z.object({
  id: z.string().uuid(),
});

export const zCreateSignalBody = zSignal.omit({ id: true });

export const zReadSignalParams = z.object({
  id: z.string().uuid(),
  signal_id: z.string().uuid(),
});

export const zReadSignalData = zSignal;

export const zReadSignalsParams = z.object({
  id: z.string().uuid(),
});

export const zReadSignalsData = z.array(zSignal);

export const zPhase = zNode;

export const zCreatePhaseParams = z.object({
  id: z.string().uuid(),
});

export const zCreatePhaseBody = zPhase.omit({ id: true });

export const zReadPhaseParams = z.object({
  id: z.string().uuid(),
  phase_id: z.string().uuid(),
});

export const zReadPhaseData = zPhase;

export const zReadPhasesParams = z.object({
  id: z.string().uuid(),
});

export const zReadPhasesData = z.array(zPhase);

export const zReadTerminalParams = z.object({
  id: z.string().uuid(),
});

export const zReadTerminalData = zPhase;

export const zReadInitialParams = z.object({
  id: z.string().uuid(),
});

export const zReadInitialData = zPhase;
