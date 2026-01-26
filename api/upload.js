const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { image } = req.body;

  const uploadResponse = await cloudinary.uploader.upload(image, {
    folder: "mur_photos"
  });

  res.status(200).json({ url: uploadResponse.secure_url });
}
