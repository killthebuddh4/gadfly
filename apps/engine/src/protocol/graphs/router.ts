import express from "express";
import { router as edgePrimitivesRouter } from "./primitives/edge/router.js";
import { router as graphPrimitivesRouter } from "./primitives/graph/router.js";
import { router as pointerPrimitivesRouter } from "./primitives/pointer/router.js";
import { router as typePrimitivesRouter } from "./primitives/type/router.js";
import { router as operationPrimitivesRouter } from "./primitives/operation/router.js";
import { router as nodePrimitivesRouter } from "./primitives/node/router.js";
import { router as valuePrimitivesRouter } from "./primitives/value/router.js";

export const router = express.Router();

router.use("/edge", edgePrimitivesRouter);
router.use("/graph", graphPrimitivesRouter);
router.use("/pointer", pointerPrimitivesRouter);
router.use("/type", typePrimitivesRouter);
router.use("/operation", operationPrimitivesRouter);
router.use("/node", nodePrimitivesRouter);
router.use("/value", valuePrimitivesRouter);
