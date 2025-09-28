const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.static('public'));
app.post('/register', (req, res) => {
    const { name, email } = req.body;
    console.log('Received data:', req.body); 
    res.json({ message: 'Data received successfully', data: req.body });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


