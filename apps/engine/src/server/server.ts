import express from "express";
import cors from "cors";
import { router as primitivesRouter } from "../protocol/primitives/api/router.js";
import { router as structuresRouter } from "../protocol/structures/api/router.js";

const app = express();

app.use(cors());

app.use("/p", primitivesRouter);
app.use("/s", structuresRouter);

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});
