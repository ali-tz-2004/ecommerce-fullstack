import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (_req, res) => {
  res.json({
    message: "E-Commerce API is running",
  });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
