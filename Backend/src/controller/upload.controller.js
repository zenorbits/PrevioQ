const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const fileModel = require("../models/file.model");

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const mimetype = req.file.mimetype;
    let resourceType = "raw"; // default

    if (mimetype.startsWith("image/")) {
      resourceType = "image";
    } else if (mimetype.startsWith("video/")) {
      resourceType = "video";
    } else if (mimetype === "application/pdf") {
      resourceType = "raw"; // PDFs stay raw
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads",
      resource_type: 'image',
      format: mimetype === "application/pdf" ? "pdf" : undefined, // force PDF format
      use_filename: true,     // keep original filename
      unique_filename: false, // don’t randomize
    });

    // Clean up temp file
    fs.unlinkSync(req.file.path);

    const customName =
      req.body.customName?.trim() !== "" ? req.body.customName.trim() : req.file.originalname;

    const newFile = new fileModel({
      filename: customName,
      url: result.secure_url,
      public_id: result.public_id,
      uploader: req.body.uploader || "Anonymous",
      tags: req.body.tags ? req.body.tags.split(",") : [],
    });

    await newFile.save();

    res.json({ message: "File uploaded successfully", file: newFile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Upload failed" });
  }
};

module.exports = uploadFile;