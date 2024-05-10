import express from "express";
import { router as edgeRouter } from "./primitives/edge/router.js";
import { router as graphRouter } from "./primitives/graph/router.js";
import { router as pointerRouter } from "./primitives/pointer/router.js";
import { router as typeRouter } from "./primitives/type/router.js";
import { router as operationRouter } from "./primitives/operation/router.js";
import { router as nodeRouter } from "./primitives/node/router.js";
import { router as valueRouter } from "./primitives/value/router.js";

export const router = express.Router();

router.use("/edge", edgeRouter);
router.use("/graph", graphRouter);
router.use("/pointer", pointerRouter);
router.use("/type", typeRouter);
router.use("/operation", operationRouter);
router.use("/node", nodeRouter);
router.use("/value", valueRouter);
