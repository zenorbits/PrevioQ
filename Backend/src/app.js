const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config()

const cors = require('cors');

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST",],
    credentials: true
}));

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));




module.exports = app;