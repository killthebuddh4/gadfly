import express from "express";

const app = express();

app.use(express.json());

app.get("/sestina", async (req, res) => {
  res.json({ ok: true, data: { output: [] } });
});

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});
