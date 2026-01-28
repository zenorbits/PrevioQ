// app.js
const express = require('express');
const app = express();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const cors = require('cors');
const uploadFileRouter = require('../src/routes/upload.routes');

dotenv.config();

// ✅ CORS setup
const allowedOrigins = [
  "http://localhost:5173",              // local dev (Vite)
  "https://previoq-frontend.vercel.app" // your Vercel deployment
  // add "https://yourcustomdomain.com" if you mapped a custom domain
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, or server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', uploadFileRouter);

module.exports = { app };