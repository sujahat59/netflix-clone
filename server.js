// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const PORT = 5001;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to Netflix Clone Backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
