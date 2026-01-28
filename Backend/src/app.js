// app.js
const express = require('express');
const app = express();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const cors = require('cors');
const uploadFileRouter = require('../src/routes/upload.routes')

dotenv.config();

// CORS setup
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST"],
  credentials: true
}));

// Middleware
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',uploadFileRouter);

module.exports = {app};