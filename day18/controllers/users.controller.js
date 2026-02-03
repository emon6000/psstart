const path = require('path');
const users = require('../models/users.models');
exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
};
exports.saveUser = (req, res) => {
  const name = req.body.username;
  const pass = req.body.password;
  const user ={
    username:name,
    password:pass
  }
  users.push(user);
  res.status(201).json({
    success: true,
    users
  })
};