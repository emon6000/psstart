const express = require('express');
const router = require('./routes/users.route');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(router);
const productRouter = require('./routes/product.route');
app.use(productRouter);






app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
}
);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});