const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/test', (req, res) => {
  res.status(200).send({
    message: "Welcome to the server"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});