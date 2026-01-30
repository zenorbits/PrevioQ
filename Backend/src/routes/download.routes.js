const express = require('express');
const router = express.Router();
const downloadController = require('../controller/download.controller');


router.get('/download/:id',downloadController);

module.exports = router