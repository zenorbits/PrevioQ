const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const dotenv = require('dotenv');
const fileModel = require('../models/file.model'); // import your schema

dotenv.config();

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadFile = async (req, res) => {
  try {
    console.log("req.file:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("req.body:", req.body);

    // ✅ Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'uploads',
      resource_type: 'raw',
    });

    // ✅ Clean up local temp file
    fs.unlinkSync(req.file.path);
    const customName = req.body.customName && req.body.customName.trim() !== ""
      ? req.body.customName.trim()
      : req.file.originalname;

    const newFile = new fileModel({
      filename: customName,                     // 👈 use custom name if provided
      url: result.secure_url,                   // Cloudinary URL
      public_id: result.public_id,              // Cloudinary public ID
      uploader: req.body.uploader || "Anonymous",    // uploader from request body
      tags: req.body.tags ? req.body.tags.split(',') : []
    });

    await newFile.save();

    res.json({
      message: "File uploaded successfully",
      file: newFile
    });
  } catch (err) {
    console.error(err); // logs full error to console
    res.status(500).json({ error: err.message || "Upload failed" });
  }
};

module.exports = uploadFile;