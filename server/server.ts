import express from "express";
import cors from "cors";

const PORT: number = 3000;
const server = express();
server.use(cors());
server.use(express.json());

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
