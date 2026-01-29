const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// ✅ Multer stores files temporarily in /tmp
const upload = multer({ dest: 'tmp/' });

// ✅ Helper function to push file to Cloudinary
const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'uploads',
      resource_type: 'raw',
    });

    // Clean up local temp file after upload
    fs.unlinkSync(filePath);

    return result.secure_url;
  } catch (err) {
    throw err;
  }
};

module.exports = { upload, uploadToCloudinary };