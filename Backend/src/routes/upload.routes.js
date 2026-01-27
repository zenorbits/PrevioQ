const express = require('express');
const router = express.Router();
const { upload } = require('../app');
const uploadFileController = require('../controller/upload.controller');

router.post('/upload', upload.single('file'),uploadFileController)

module.exports = router