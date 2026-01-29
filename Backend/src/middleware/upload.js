const multer = require("multer");

// Multer stores files temporarily in /tmp
const upload = multer({ dest: "tmp/" });

module.exports = upload;