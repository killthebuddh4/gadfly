import * as express from "express";
import { router as machineRouter } from "../machine/api/router.js";
import { router as processRouter } from "../machine/process/api/router.js";

export const router = express.Router();

router.use("/machine", machineRouter);
router.use("/machine/process", processRouter);
