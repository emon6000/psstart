const express = require('express');
const cors = require('cors');
require('./config/db');

const userRoutes = require('./routes/user.route');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/users', userRoutes);



//api/users:get
//api/users/:id:get
//api/users:post
//api/users/:id:patch
//api/users/:id:delete


//home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//route not found
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});
//server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;