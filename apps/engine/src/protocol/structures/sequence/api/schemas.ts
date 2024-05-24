import { z } from "zod";
import { zGraph, zNode } from "../../../primitives/api/schemas.js";
import { zEdge } from "../../../primitives/api/schemas.js";

export const zSequence = zGraph;

export const zCreateSequenceBody = zSequence.omit({ id: true });

export const zCreateSequenceData = zSequence;

export const zReadSequenceParams = zSequence.pick({ id: true });

export const zReadSequenceData = zSequence;

export const zIterator = zEdge;

export const zCreateIteratorParams = z.object({
  id: z.string().uuid(),
});

export const zCreateIteratorBody = zIterator.omit({ id: true });

export const zReadIteratorParams = z.object({
  id: z.string().uuid(),
  iterator_id: z.string().uuid(),
});

export const zReadIteratorData = zIterator;

export const zReadIteratorsParams = z.object({
  id: z.string().uuid(),
});

export const zReadIteratorsData = z.array(zIterator);

export const zElement = zNode;

export const zCreateElementParams = z.object({
  id: z.string().uuid(),
});

export const zCreateElementBody = zElement.omit({ id: true });

export const zReadElementParams = z.object({
  id: z.string().uuid(),
  element_id: z.string().uuid(),
});

export const zReadElementData = zElement;

export const zReadElementsParams = z.object({
  id: z.string().uuid(),
});

export const zReadElementsData = z.array(zElement);

export const zReadLastParams = z.object({
  id: z.string().uuid(),
});

export const zReadLastData = zElement;

export const zReadFirstParams = z.object({
  id: z.string().uuid(),
});

export const zReadFirstData = zElement;
