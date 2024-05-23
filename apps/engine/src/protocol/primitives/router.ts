import express from "express";
import { router as edgeRouter } from "./edge/api/router.js";
import { router as graphRouter } from "./graph/api/router.js";
import { router as pointerRouter } from "./node/pointer/router.js";
import { router as nodeRouter } from "./node/api/router.js";
import { router as valueRouter } from "./value/api/router.js";
import { router as typeRouter } from "./type/api/router.js";

export const router = express.Router();

router.use("/edge", edgeRouter);
router.use("/graph", graphRouter);
router.use("/pointer", pointerRouter);
router.use("/node", nodeRouter);
router.use("/value", valueRouter);
router.use("/type", typeRouter);
