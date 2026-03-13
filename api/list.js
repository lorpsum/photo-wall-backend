import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data/images.json");

  let images = [];
  try {
    images = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch(e){}

  res.status(200).json({ images });
}
