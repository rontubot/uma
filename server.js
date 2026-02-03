const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
// Express static automatically serves index.html at the root (/)
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
