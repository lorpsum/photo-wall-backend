const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

export default async function handler(req, res) {
  const result = await cloudinary.search
    .expression("folder:mur_photos")
    .sort_by("created_at", "desc")
    .max_results(500)
    .execute();

  const urls = result.resources.map(r => r.secure_url);
  res.status(200).json({ images: urls });
}
