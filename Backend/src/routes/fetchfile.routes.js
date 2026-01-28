const express = require('express');
const router = express.Router();
const fetchFileController = require('../controller/fetchfile.controller');

router.get('/fetchfile',fetchFileController);

module.exports = router