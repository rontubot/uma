const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
// express.static handles index.html by default
app.use(express.static(__dirname));

// Use a middleware instead of a route for the fallback to avoid PathError
app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
