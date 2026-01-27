const express = require('express');
const app = express();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const dotenv = require('dotenv');
dotenv.config()

const cors = require('cors');

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST",],
    credentials: true
}));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        resource_type: 'auto'
    }
})

const upload = multer({ storage });

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));




module.exports = { app, upload };