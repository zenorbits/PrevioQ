const connectToDB = require('./src/db/db');
const {app} = require('./src/app');

const PORT = process.env.PORT || 3000;

connectToDB()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("Failed to connect to DB:", err);
        process.exit(1);
    });