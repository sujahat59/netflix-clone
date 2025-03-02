// Import necessary modules
const express = require('express');
const cors = require('cors'); // Import CORS

// Create an Express application
const app = express();
const PORT = 5001;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Allow JSON data

// Define a test API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
