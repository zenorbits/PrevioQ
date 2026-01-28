const express = require('express');
const router = express.Router();
const {upload} = require('../middleware/upload');
const uploadFileController = require('../controller/upload.controller');

router.post('/upload', upload.single('file'), uploadFileController);

module.exports = router;