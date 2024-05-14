import express from "express";
import { router } from "../protocol/graphs/primitives/router.js";

const app = express();

app.use("/g", router);

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});
