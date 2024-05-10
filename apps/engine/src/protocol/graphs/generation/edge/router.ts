import express from "express";
import { z } from "zod";

export const router = express.Router();

router.use(express.json());
