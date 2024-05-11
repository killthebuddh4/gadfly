import express from "express";
import { router as edgePrimitivesRouter } from "./primitives/edge/router.js";
import { router as graphPrimitivesRouter } from "./primitives/graph/router.js";
import { router as pointerPrimitivesRouter } from "./primitives/pointer/router.js";
import { router as typePrimitivesRouter } from "./primitives/type/router.js";
import { router as generationPrimitivesRouter } from "./primitives/generation/router.js";
import { router as nodePrimitivesRouter } from "./primitives/node/router.js";
import { router as valuePrimitivesRouter } from "./primitives/value/router.js";
import { router as edgeTraversalRouter } from "./traversal/edge/router.js";
import { router as graphTraversalRouter } from "./traversal/graph/router.js";
import { router as pointerTraversalRouter } from "./traversal/pointer/router.js";
import { router as generationTraversalRouter } from "./traversal/generation/router.js";
import { router as nodeTraversalRouter } from "./traversal/node/router.js";

export const router = express.Router();

router.use("/edge", edgePrimitivesRouter);
router.use("/graph", graphPrimitivesRouter);
router.use("/pointer", pointerPrimitivesRouter);
router.use("/type", typePrimitivesRouter);
router.use("/generation", generationPrimitivesRouter);
router.use("/node", nodePrimitivesRouter);
router.use("/value", valuePrimitivesRouter);
router.use("/t/edge", edgeTraversalRouter);
router.use("/t/graph", graphTraversalRouter);
router.use("/t/pointer", pointerTraversalRouter);
router.use("/t/generation", generationTraversalRouter);
router.use("/t/node", nodeTraversalRouter);
