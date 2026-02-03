const path = require('path');
const Products = require('../models/products.models');
exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/products.html'));
};
exports.saveProducts = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const product ={
    name:name,
    price:price
  }
  Products.push(product);
  res.status(201).json({
    success: true,
    Products
  })
};