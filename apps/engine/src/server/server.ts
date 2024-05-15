import express from "express";
import cors from "cors";
import { router } from "../protocol/primitives/router.js";

const app = express();

app.use(cors());

app.use("/p", router);

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});
