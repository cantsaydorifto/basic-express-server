import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/secret", (req, res) => {
  res.json({ message: process.env.SECRET });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(cors());
