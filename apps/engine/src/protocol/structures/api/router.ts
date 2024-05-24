import * as express from "express";
import { router as flowRouter } from "../flow/api/router.js";
import { router as treeRouter } from "../tree/api/router.js";
import { router as sequenceRouter } from "../sequence/api/router.js";

export const router = express.Router();

router.use("/flow", flowRouter);
router.use("/tree", treeRouter);
router.use("/sequence", sequenceRouter);
