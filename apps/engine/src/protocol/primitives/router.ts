import express from "express";
import { router as edgeRouter } from "./edge/router.js";
import { router as graphRouter } from "./graph/router.js";
import { router as pointerRouter } from "./pointer/router.js";
import { router as nodeRouter } from "./node/router.js";
import { router as valueRouter } from "./value/router.js";

export const router = express.Router();

router.use("/edge", edgeRouter);
router.use("/graph", graphRouter);
router.use("/pointer", pointerRouter);
router.use("/node", nodeRouter);
router.use("/value", valueRouter);
