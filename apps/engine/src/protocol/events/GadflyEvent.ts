import { NodeGenerationStarted } from "./NodeGenerationStarted.js";
import { NodeGenerationCancelled } from "./NodeGenerationCancelled.js";
import { NodeGenerationResumed } from "./NodeGenerationResumed.js";
import { NodeGenerationPaused } from "./NodeGenerationPaused.js";
import { NodeGenerationFinished } from "./NodeGenerationFinished.js";
import { NodeGenerationFailed } from "./NodeGenerationFailed.js";

export type GadflyEvent =
  | NodeGenerationStarted
  | NodeGenerationCancelled
  | NodeGenerationResumed
  | NodeGenerationFailed
  | NodeGenerationPaused
  | NodeGenerationFinished;
