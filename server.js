const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serve static files from the "public" directory (relative to server.js)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the homepage (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
