const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: String,
    url: String,
    uploadedAt: {
        type: Date,
        default: Date.now
    },
    uploader: String,
    tags: [String]
});

const fileModel = mongoose.model('File', fileSchema);

module.exports = fileModel;