const express = require('express');
const fileModel = require('../models/file.model');

const fetchFile = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;

        const skip = (page - 1) * limit;


        const files = await fileModel.find().sort({ uploadedAt: -1 }).skip(skip).limit(limit);
        const total = await fileModel.countDocuments();

        res.status(200).json({
            success: true,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            files
        });

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch files" });

    }
}

module.exports = fetchFile