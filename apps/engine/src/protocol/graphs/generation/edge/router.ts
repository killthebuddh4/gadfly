import express from "express";
import { actions } from "./actions.js";
import { z } from "zod";

export const router = express.Router();

router.use(express.json());

const zGetParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/actions", async (req, res) => {
  const params = zGetParams.parse(req.params);
  const data = await actions({ id: params.id });

  res.json({ ok: true, data });
});
