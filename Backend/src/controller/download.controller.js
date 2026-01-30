const fileModel = require('../models/file.model');
const axios = require('axios');
const mime = require('mime-types');

const downloadFile = async (req, res) => {
  try {
    const file = await fileModel.findById(req.params.id);
    if (!file) return res.status(404).send('File Not found');

    // Fetch file from Cloudinary
    const response = await axios({
      url: file.url,
      method: 'GET',
      responseType: 'stream',
    });

    // 👉 Your snippet goes here
    let filename = file.filename;
    const mimeType = mime.lookup(file.url) || 'application/octet-stream';
    const ext = mime.extension(mimeType);

    if (ext && !filename.toLowerCase().endsWith(`.${ext}`)) {
      filename = `${filename}.${ext}`;
    }

    res.setHeader('Content-Type', mimeType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Pipe Cloudinary stream to client
    response.data.pipe(res);
  } catch (err) {
    console.error('Download error:', err);
    res.status(500).send('Download failed');
  }
};

module.exports = downloadFile;