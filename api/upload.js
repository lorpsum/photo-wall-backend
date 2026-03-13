import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { url } = req.body;
  const filePath = path.join(process.cwd(), "data/images.json");

  let images = [];
  try {
    images = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch(e){}

  images.push(url);
  fs.writeFileSync(filePath, JSON.stringify(images));

  res.status(200).json({ ok: true });
}
