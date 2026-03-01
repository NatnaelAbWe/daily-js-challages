import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { error } from "node:console";

const PORT: number = 3000;
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    error: "you have reached your daily API call request",
  },
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(limiter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "dismvowel is running on the port 3000" });
});

server.post("/rmvowel", (req, res) => {
  const { text } = req.body;
  if (!text || typeof text != "string") {
    return res
      .status(400)
      .json({ error: "text field is required and should be string" });
  }
  const cleanText = text.replace(/[aeiou]/gi, "");
  return res.status(200).json({ newText: cleanText });
});

server.listen(PORT, () => {
  console.log("your server is running on port:", PORT);
});
