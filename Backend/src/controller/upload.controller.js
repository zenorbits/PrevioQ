const fileModel = require('../models/file.model'); // import your schema

const uploadFile = async (req, res) => {
    try {
        const newFile = new fileModel({
            filename: req.file.originalname,       // original filename
            url: req.file.path,                    // Cloudinary URL
            uploader: req.body.uploader || "Anon", // uploader from request body
            tags: req.body.tags ? req.body.tags.split(',') : []
        });

        await newFile.save();

        res.json({
            message: "File uploaded successfully",
            file: newFile
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Upload failed" });
    }
};

module.exports = uploadFile;