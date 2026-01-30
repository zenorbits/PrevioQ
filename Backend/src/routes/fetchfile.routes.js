const express = require('express');
const router = express.Router();
const fetchFileController = require('../controller/fetchfile.controller');

router.get('/fetchfile', fetchFileController);


router.get('/files/:id', async (req, res) => {
    try {
        const file = await fileModel.findById(req.params.id);

        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }

        // Force correct header for PDFs
        if (file.filename.toLowerCase().endsWith(".pdf")) {
            res.setHeader("Content-Type", "application/pdf");
        }

        res.redirect(file.url); // Redirect to Cloudinary
    } catch (err) {
        console.error("Error serving file:", err);
        res.status(500).json({ error: "Failed to serve file" });
    }
});



module.exports = router