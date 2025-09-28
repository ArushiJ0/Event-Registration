// Install Express first: npm install express

const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (your HTML/JS frontend)
app.use(express.static('public'));

// POST route to receive data
app.post('/register', (req, res) => {
    const { name, email } = req.body;
    console.log('Received data:', req.body); // Shows in terminal
    res.json({ message: 'Data received successfully', data: req.body });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

