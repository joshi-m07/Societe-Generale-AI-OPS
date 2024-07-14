const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('AI-Powered IT Operations & Network Management API');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Handle contact form submission (e.g., store in database, send email)
    res.json({ message: 'Contact form submitted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
