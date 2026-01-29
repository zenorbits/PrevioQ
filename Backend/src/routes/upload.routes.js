const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload"); // multer setup
const uploadFileController = require('../controller/upload.controller'); // controller

// ✅ Route: POST /upload
router.post("/upload", upload.single("file"), uploadFileController);

module.exports = router;