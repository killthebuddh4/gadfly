import { z } from "zod";
import { zGraph, zNode } from "../../../primitives/api/primitives.js";
import { zEdge } from "../../../primitives/api/primitives.js";

export const zFlow = zGraph;

export const zCreateRootBody = zFlow.omit({ id: true });

export const zCreateRootData = zFlow;

export const zReadRootParams = zFlow.pick({ id: true });

export const zReadRootData = zFlow;

export const zChannel = zEdge;

export const zCreateChannelParams = z.object({
  id: z.string().uuid(),
});

export const zCreateChannelBody = zChannel.omit({ id: true });

export const zReadChannelParams = z.object({
  id: z.string().uuid(),
  channel_id: z.string().uuid(),
});

export const zReadChannelData = zChannel;

export const zReadChannelsParams = z.object({
  id: z.string().uuid(),
});

export const zReadChannelsData = z.array(zChannel);

export const zState = zNode;

export const zCreateStateParams = z.object({
  id: z.string().uuid(),
});

export const zCreateStateBody = zState.omit({ id: true });

export const zReadStateParams = z.object({
  id: z.string().uuid(),
  state_id: z.string().uuid(),
});

export const zReadStateData = zState;

export const zReadStatesParams = z.object({
  id: z.string().uuid(),
});

export const zReadStatesData = z.array(zState);

export const zReadHeadsParams = z.object({
  id: z.string().uuid(),
});

export const zReadHeadsData = z.array(zState);

export const zReadTailsParams = z.object({
  id: z.string().uuid(),
});

export const zReadTailsData = z.array(zState);
