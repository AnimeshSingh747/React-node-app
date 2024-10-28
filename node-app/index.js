const express = require('express');
const app = express();

app.use(express.json());

app.post('/data', (req, res) => {
    res.send(`Recieved data: ${JSON.stringify(req.body)}`);
});

app.get('/', (req, res) => {
    res.send('Hello, Node.js');
});

app.get('/about', (req, res) => {
    res.send('This is About page');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});