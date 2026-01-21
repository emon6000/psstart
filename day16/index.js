const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
const path = require('path');
const port = 3000;
const pagesPath = path.join(__dirname, 'pages');

app.get('/', (req, res) => {
    res.sendFile(path.join(pagesPath, 'index.html'));
});

app.get('/circle', (req, res) => {
    res.sendFile(path.join(pagesPath, 'circle.html'));
});

app.get('/square', (req, res) => {
    res.sendFile(path.join(pagesPath, 'square.html'));
});

app.get('/triangle', (req, res) => {
    res.sendFile(path.join(pagesPath, 'triangle.html'));
});
app.post('/circle', (req, res) => {
    const radius = parseFloat(req.body.radius);
    const area = Math.PI * radius * radius;
    res.send(`The area of the circle is ${area.toFixed(2)}`);
});
app.post('/square', (req, res) => {
    const side = parseFloat(req.body.side);
    const area = side * side;
    res.send(`The area of the square is ${area.toFixed(2)}`);
});
app.post('/triangle', (req, res) => {
    const base = parseFloat(req.body.base);
    const height = parseFloat(req.body.height);
    const area = 0.5 * base * height;
    res.send(`The area of the triangle is ${area.toFixed(2)}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
