import express from "express";

const app = express();

app.use(express.json());

app.get("/dialectic", async (req, res) => {
  res.json({ ok: true, data: {} });
});

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});
